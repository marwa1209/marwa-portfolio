import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export async function generateRoundIcon(size: number) {
  const file = await readFile(join(process.cwd(), 'public/profile.jpg'))
  const src = `data:image/jpeg;base64,${file.toString('base64')}`
  const inset = Math.max(2, Math.round(size * 0.05))
  const imageSize = size - inset * 2

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#14100d',
        }}
      >
        <div
          style={{
            width: imageSize,
            height: imageSize,
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
            border: `${Math.max(1, Math.round(size * 0.04))}px solid #3d342c`,
          }}
        >
          <img
            src={src}
            width={imageSize}
            height={imageSize}
            alt=""
            style={{
              objectFit: 'cover',
              objectPosition: 'center 18%',
            }}
          />
        </div>
      </div>
    ),
    { width: size, height: size },
  )
}
