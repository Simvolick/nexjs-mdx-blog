import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'KlimY Blog - Productivity, Health & Personal Development';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1f2937',
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        <div
          style={{
            backgroundImage: 'linear-gradient(90deg, #3b82f6, #1d4ed8)',
            backgroundClip: 'text',
            color: 'transparent',
            fontSize: 64,
            fontWeight: 700,
            marginBottom: 20,
          }}
        >
          KlimY Blog
        </div>
        <div
          style={{
            color: '#e5e7eb',
            fontSize: 28,
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Productivity, Health & Personal Development
        </div>
        <div
          style={{
            color: '#9ca3af',
            fontSize: 20,
            marginTop: 20,
          }}
        >
          Expert insights and practical tips for better living
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 