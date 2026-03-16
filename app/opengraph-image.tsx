import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'HillMak | Technology & Creative Solutions – Zambia';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#0D1B2A',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 72px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background geometric accent */}
        <div
          style={{
            position: 'absolute',
            right: -80,
            top: -80,
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: 'rgba(248, 143, 30, 0.06)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 60,
            bottom: -120,
            width: 340,
            height: 340,
            borderRadius: '50%',
            background: 'rgba(248, 143, 30, 0.04)',
            display: 'flex',
          }}
        />
        {/* Orange left border bar */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: 8,
            height: 630,
            background: '#F88F1E',
            display: 'flex',
          }}
        />

        {/* Top: logo word + location pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: '#F88F1E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  color: '#0D1B2A',
                  fontWeight: 800,
                  fontSize: 22,
                  letterSpacing: '-0.5px',
                }}
              >
                H
              </span>
            </div>
            <span
              style={{
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: 28,
                letterSpacing: '-0.5px',
              }}
            >
              HillMak
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(248, 143, 30, 0.15)',
              border: '1px solid rgba(248, 143, 30, 0.3)',
              borderRadius: 999,
              padding: '6px 16px',
            }}
          >
            <span style={{ color: '#F88F1E', fontSize: 14, fontWeight: 600, letterSpacing: '0.05em' }}>
              LUSAKA · ZAMBIA
            </span>
          </div>
        </div>

        {/* Middle: main headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span
              style={{
                color: '#F88F1E',
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              Technology & Creative Solutions
            </span>
          </div>
          <span
            style={{
              color: '#FFFFFF',
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: '-2px',
              lineHeight: 1,
            }}
          >
            Two Divisions.
          </span>
          <span
            style={{
              color: '#E5E7EB',
              fontSize: 44,
              fontWeight: 300,
              letterSpacing: '-1px',
              lineHeight: 1,
            }}
          >
            One Vision.
          </span>
        </div>

        {/* Bottom: tagline + domain */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <span style={{ color: 'rgba(229, 231, 235, 0.5)', fontSize: 16, fontWeight: 400 }}>
            Enterprise Software · AI · Brand Identity · Digital Marketing
          </span>
          <span
            style={{
              color: '#F88F1E',
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: '0.02em',
            }}
          >
            www.hillmak.co.zm
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
