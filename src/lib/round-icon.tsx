import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export async function generateRoundIcon(size: number) {
  const file = await readFile(join(process.cwd(), 'public/profile.jpg'))
  const src = `data:image/jpeg;base64,${file.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: size,
          height: size,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: size,
            height: size,
            borderRadius: size,
            overflow: 'hidden',
            display: 'flex',
          }}
        >
          <img
            src={src}
            width={size}
            height={size}
            alt=""
            style={{
              objectFit: 'cover',
              objectPosition: 'center 18%',
            }}
          />
        </div>
      </div>
    ),
    {
      width: size,
      height: size,
    },
  )
}
