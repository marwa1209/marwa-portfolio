import { ImageResponse } from 'next/og'
import { profile } from '@/data/profile'

export const runtime = 'edge'
export const alt = `${profile.name} — Frontend Engineer Portfolio`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(145deg, #080b14 0%, #12182a 45%, #1a1220 100%)',
          color: '#f6f1ea',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p
            style={{
              margin: 0,
              fontSize: 22,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#e8b4a0',
            }}
          >
            Frontend Engineer
          </p>
          <h1
            style={{
              margin: 0,
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 700,
              maxWidth: 900,
            }}
          >
            {profile.name}
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: 30,
              lineHeight: 1.4,
              color: '#c9c0b8',
              maxWidth: 820,
            }}
          >
            Angular · React · Next.js · TypeScript · Bilingual EN/AR · SSR & SEO
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 22,
            color: '#a89f97',
          }}
        >
          <span>{profile.location}</span>
          <span>marwa-portfolio-roan.vercel.app</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
