import { ImageResponse } from 'next/og';

export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a3726 0%, #2D6A4F 100%)',
          borderRadius: 110,
        }}
      >
        {/* Drone plane icon */}
        <div
          style={{
            fontSize: 300,
            color: '#FFD166',
            lineHeight: 1,
            display: 'flex',
            transform: 'rotate(45deg)',
            marginTop: -20,
          }}
        >
          ✈
        </div>
      </div>
    ),
    { ...size },
  );
}
