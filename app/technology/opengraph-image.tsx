import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'HillMak Technology | Enterprise Software, AI & Digital Infrastructure';
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
        {/* Background grid dots */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: 500,
            height: 630,
            background:
              'radial-gradient(circle at 80% 50%, rgba(248, 143, 30, 0.08) 0%, transparent 60%)',
            display: 'flex',
          }}
        />
        {/* Diagonal accent stripe */}
        <div
          style={{
            position: 'absolute',
            right: 120,
            top: 0,
            width: 3,
            height: 630,
            background: 'rgba(248, 143, 30, 0.2)',
            transform: 'rotate(12deg)',
            transformOrigin: 'top right',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 160,
            top: 0,
            width: 3,
            height: 630,
            background: 'rgba(248, 143, 30, 0.1)',
            transform: 'rotate(12deg)',
            transformOrigin: 'top right',
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

        {/* Top: brand + division label */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
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
              <span style={{ color: '#0D1B2A', fontWeight: 800, fontSize: 22 }}>H</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 22, letterSpacing: '-0.3px' }}>
                HillMak
              </span>
              <span style={{ color: '#F88F1E', fontWeight: 600, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Technology
              </span>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 999,
              padding: '6px 18px',
            }}
          >
            <span style={{ color: 'rgba(229,231,235,0.6)', fontSize: 13, fontWeight: 500, letterSpacing: '0.08em' }}>
              LUSAKA · ZAMBIA
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span
            style={{
              color: '#F88F1E',
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            Enterprise Software & AI
          </span>
          <span
            style={{
              color: '#FFFFFF',
              fontSize: 68,
              fontWeight: 800,
              letterSpacing: '-2px',
              lineHeight: 1.0,
            }}
          >
            Built for Scale.
          </span>
          <span
            style={{
              color: '#E5E7EB',
              fontSize: 30,
              fontWeight: 300,
              letterSpacing: '-0.5px',
              lineHeight: 1.2,
            }}
          >
            Engineered for Africa.
          </span>
        </div>

        {/* Bottom: service tags + URL */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', gap: 10 }}>
            {['ERP', 'AI & Automation', 'Cloud', 'Procurement Platforms', 'IoT'].map((tag) => (
              <div
                key={tag}
                style={{
                  display: 'flex',
                  background: 'rgba(248, 143, 30, 0.1)',
                  border: '1px solid rgba(248, 143, 30, 0.25)',
                  borderRadius: 6,
                  padding: '5px 12px',
                }}
              >
                <span style={{ color: '#F88F1E', fontSize: 13, fontWeight: 500 }}>{tag}</span>
              </div>
            ))}
          </div>
          <span style={{ color: 'rgba(248, 143, 30, 0.7)', fontSize: 16, fontWeight: 500 }}>
            www.hillmak.co.zm/technology
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
