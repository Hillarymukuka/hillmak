import { NextRequest, NextResponse } from 'next/server';

// ── Simple in-memory rate limiter ────────────────────────────────────────────
const RATE_LIMIT = 5;          // max requests
const WINDOW_MS  = 10 * 60 * 1000; // per 10 minutes
const ipMap      = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now  = Date.now();
  const entry = ipMap.get(ip);
  if (!entry || now > entry.resetAt) {
    ipMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

// ── Strip HTML tags and trim to a safe length ────────────────────────────────
function sanitise(value: unknown, maxLen = 500): string {
  if (typeof value !== 'string') return '';
  return value.replace(/<[^>]*>/g, '').trim().slice(0, maxLen);
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait before trying again.' },
      { status: 429 }
    );
  }

  // Body size guard (~20 KB max)
  const contentLength = Number(req.headers.get('content-length') ?? 0);
  if (contentLength > 20_000) {
    return NextResponse.json({ error: 'Request too large.' }, { status: 413 });
  }

  try {
    const body = await req.json();

    const name        = sanitise(body.name, 120);
    const email       = sanitise(body.email, 120);
    const phone       = sanitise(body.phone, 30);
    const projectType = sanitise(body.projectType, 80);
    const budget      = sanitise(body.budget, 60);
    const message     = sanitise(body.message, 2000);

    // Basic email format check
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    // Only attempt to send email when real credentials are in .env.local
    const isConfigured =
      smtpUser && smtpPass &&
      !smtpUser.includes('your-') &&
      !smtpPass.includes('your-');

    if (isConfigured) {
      const nodemailer = (await import('nodemailer')).default;

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: { user: smtpUser, pass: smtpPass },
      });

      await transporter.sendMail({
        from: `"HillMak Creative Website" <${smtpUser}>`,
        to: 'info@hillmakgroup.com',
        replyTo: email,
        subject: `New Project Inquiry — ${projectType || 'General'} from ${name}`,
        html: `
          <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#fff;border:1px solid #eee;border-radius:12px;overflow:hidden">
            <div style="background:#ED145B;padding:32px 40px">
              <h1 style="color:white;margin:0;font-size:22px;font-weight:700">New Project Inquiry</h1>
              <p style="color:rgba(255,255,255,0.8);margin:8px 0 0;font-size:14px">HillMak Creative Website</p>
            </div>
            <div style="padding:40px">
              <table style="width:100%;border-collapse:collapse;font-size:14px;color:#333">
                <tr><td style="padding:10px 0;font-weight:600;width:140px;color:#666">Full Name</td><td style="padding:10px 0">${name}</td></tr>
                <tr style="border-top:1px solid #f0f0f0"><td style="padding:10px 0;font-weight:600;color:#666">Email</td><td style="padding:10px 0"><a href="mailto:${email}" style="color:#ED145B">${email}</a></td></tr>
                ${phone ? `<tr style="border-top:1px solid #f0f0f0"><td style="padding:10px 0;font-weight:600;color:#666">Phone</td><td style="padding:10px 0">${phone}</td></tr>` : ''}
                ${projectType ? `<tr style="border-top:1px solid #f0f0f0"><td style="padding:10px 0;font-weight:600;color:#666">Project Type</td><td style="padding:10px 0">${projectType}</td></tr>` : ''}
                ${budget ? `<tr style="border-top:1px solid #f0f0f0"><td style="padding:10px 0;font-weight:600;color:#666">Budget Range</td><td style="padding:10px 0">${budget}</td></tr>` : ''}
              </table>
              <div style="margin-top:24px;padding-top:24px;border-top:1px solid #f0f0f0">
                <p style="font-weight:600;color:#666;font-size:14px;margin:0 0 10px">Project Description</p>
                <p style="font-size:14px;color:#333;line-height:1.7;margin:0;white-space:pre-wrap">${message}</p>
              </div>
            </div>
            <div style="padding:20px 40px;background:#f9f9f9;font-size:12px;color:#999;text-align:center">
              Sent from hillmak.co.zm — HillMak Creative Contact Form
            </div>
          </div>
        `,
      });

      console.log(`[contact] Email sent → info@hillmakcreative.com (from: ${email})`);
    } else {
      // Dev / unconfigured: log submission to terminal instead of crashing
      console.log('\n📬 [contact] New project inquiry (configure .env.local to send real emails):');
      console.log(`  Name:         ${name}`);
      console.log(`  Email:        ${email}`);
      if (phone)       console.log(`  Phone:        ${phone}`);
      if (projectType) console.log(`  Project Type: ${projectType}`);
      if (budget)      console.log(`  Budget:       ${budget}`);
      console.log(`  Message:      ${message}\n`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[contact] Error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
