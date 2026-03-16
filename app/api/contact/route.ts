import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

// ── Strip HTML tags and trim to a safe length ────────────────────────────────
function sanitise(value: unknown, maxLen = 500): string {
  if (typeof value !== 'string') return '';
  return value.replace(/<[^>]*>/g, '').trim().slice(0, maxLen);
}

export async function POST(req: NextRequest) {
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
    const enquiryType = sanitise(body.enquiryType, 80);
    const message     = sanitise(body.message, 2000);

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const isConfigured = resendKey && !resendKey.includes('your-');

    if (isConfigured) {
      const { Resend } = await import('resend');
      const resend = new Resend(resendKey);

      const labelRow = (label: string, val: string) =>
        val ? `<tr style="border-top:1px solid #f0f0f0"><td style="padding:10px 0;font-weight:600;width:140px;color:#666;font-size:14px">${label}</td><td style="padding:10px 0;font-size:14px;color:#333">${val}</td></tr>` : '';

      await resend.emails.send({
        from: 'HillMak Website <onboarding@resend.dev>',
        to: 'info@hillmakgroup.com',
        replyTo: email,
        subject: `New Inquiry — ${projectType || enquiryType || 'General'} from ${name}`,
        html: `
          <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#fff;border:1px solid #eee;border-radius:12px;overflow:hidden">
            <div style="background:#ED145B;padding:32px 40px">
              <h1 style="color:white;margin:0;font-size:22px;font-weight:700">New Inquiry</h1>
              <p style="color:rgba(255,255,255,0.8);margin:8px 0 0;font-size:14px">HillMak Website Contact Form</p>
            </div>
            <div style="padding:40px">
              <table style="width:100%;border-collapse:collapse">
                ${labelRow('Full Name', name)}
                <tr><td style="padding:10px 0;font-weight:600;width:140px;color:#666;font-size:14px">Email</td><td style="padding:10px 0"><a href="mailto:${email}" style="color:#ED145B;font-size:14px">${email}</a></td></tr>
                ${labelRow('Phone', phone)}
                ${labelRow('Project Type', projectType)}
                ${labelRow('Enquiry Type', enquiryType)}
                ${labelRow('Budget Range', budget)}
              </table>
              <div style="margin-top:24px;padding-top:24px;border-top:1px solid #f0f0f0">
                <p style="font-weight:600;color:#666;font-size:14px;margin:0 0 10px">Message</p>
                <p style="font-size:14px;color:#333;line-height:1.7;margin:0;white-space:pre-wrap">${message}</p>
              </div>
            </div>
            <div style="padding:20px 40px;background:#f9f9f9;font-size:12px;color:#999;text-align:center">
              Sent from hillmak.co.zm
            </div>
          </div>
        `,
      });

      console.log(`[contact] Email sent via Resend → info@hillmakgroup.com (from: ${email})`);
    } else {
      // Dev / unconfigured: log to console
      console.log('\n[contact] New inquiry (add RESEND_API_KEY to .env.local to send emails):');
      console.log(`  Name:    ${name}`);
      console.log(`  Email:   ${email}`);
      if (phone)        console.log(`  Phone:   ${phone}`);
      if (projectType)  console.log(`  Project: ${projectType}`);
      if (enquiryType)  console.log(`  Enquiry: ${enquiryType}`);
      if (budget)       console.log(`  Budget:  ${budget}`);
      console.log(`  Message: ${message}\n`);
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
