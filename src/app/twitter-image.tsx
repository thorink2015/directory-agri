import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'TerraDron.ro: Operatori de Drone Agricole din România';
export const size = { width: 1200, height: 628 };
export const contentType = 'image/png';

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a3726 0%, #2D6A4F 60%, #1a3726 100%)',
          padding: '50px 80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Logo row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, marginBottom: 32 }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 20,
              backgroundColor: 'rgba(255,255,255,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 50,
            }}
          >
            ✈
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                fontSize: 64,
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: -2,
                lineHeight: 1,
              }}
            >
              TerraDron
              <span style={{ color: '#FFD166' }}>.ro</span>
            </div>
            <div style={{ fontSize: 20, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>
              terradron.ro
            </div>
          </div>
        </div>

        {/* Main message */}
        <div
          style={{
            fontSize: 34,
            color: 'rgba(255,255,255,0.9)',
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.4,
            marginBottom: 40,
            fontWeight: 600,
          }}
        >
          Găsești operatori verificați de drone agricole în județul tău
        </div>

        {/* Pills */}
        <div style={{ display: 'flex', gap: 16 }}>
          {['20 operatori', '41 județe', 'Contact direct'].map((tag) => (
            <div
              key={tag}
              style={{
                backgroundColor: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.22)',
                borderRadius: 50,
                padding: '10px 24px',
                color: '#FFD166',
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
