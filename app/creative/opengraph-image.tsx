import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'HillMak Creative | Brand Identity, Digital Marketing & Content Production';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#333436',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 72px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background radial glow – magenta */}
        <div
          style={{
            position: 'absolute',
            right: -100,
            top: -100,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(237, 20, 91, 0.12) 0%, transparent 70%)',
            display: 'flex',
          }}
        />
        {/* Mint glow bottom-left */}
        <div
          style={{
            position: 'absolute',
            left: -60,
            bottom: -60,
            width: 360,
            height: 360,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(21, 238, 167, 0.07) 0%, transparent 70%)',
            display: 'flex',
          }}
        />
        {/* Magenta left border bar */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: 8,
            height: 630,
            background: '#ED145B',
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
                background: '#ED145B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ color: '#FFFFFF', fontWeight: 800, fontSize: 22 }}>H</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 22, letterSpacing: '-0.3px' }}>
                HillMak
              </span>
              <span
                style={{
                  color: '#ED145B',
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Creative
              </span>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 999,
              padding: '6px 18px',
            }}
          >
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, fontWeight: 500, letterSpacing: '0.08em' }}>
              LUSAKA · ZAMBIA
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span
            style={{
              color: '#ED145B',
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            Brand Identity & Creative Strategy
          </span>
          <span
            style={{
              color: '#FFFFFF',
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: '-2px',
              lineHeight: 1.0,
            }}
          >
            Where Brands
          </span>
          <span
            style={{
              color: '#15EEA7',
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: '-2px',
              lineHeight: 1.0,
            }}
          >
            Come Alive.
          </span>
        </div>

        {/* Bottom: service tags + URL */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', gap: 10 }}>
            {['Brand Identity', 'UI/UX', 'Digital Marketing', 'Exhibition', 'Content'].map((tag) => (
              <div
                key={tag}
                style={{
                  display: 'flex',
                  background: 'rgba(237, 20, 91, 0.1)',
                  border: '1px solid rgba(237, 20, 91, 0.25)',
                  borderRadius: 6,
                  padding: '5px 12px',
                }}
              >
                <span style={{ color: '#ED145B', fontSize: 13, fontWeight: 500 }}>{tag}</span>
              </div>
            ))}
          </div>
          <span style={{ color: 'rgba(21, 238, 167, 0.7)', fontSize: 16, fontWeight: 500 }}>
            www.hillmak.co.zm/creative
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
