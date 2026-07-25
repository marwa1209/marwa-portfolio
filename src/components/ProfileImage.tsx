import Image from 'next/image'
import { profile } from '@/data/profile'

type ProfileImageProps = {
  variant?: 'hero' | 'about' | 'nav'
  priority?: boolean
  className?: string
}

const variantStyles = {
  hero: {
    wrapper: 'relative mx-auto w-full max-w-[22rem] lg:max-w-none',
    frame: 'ds-photo-frame ds-photo-frame-hero',
    width: 520,
    height: 640,
    sizes: '(max-width: 1024px) 85vw, 520px',
  },
  about: {
    wrapper: 'relative mx-auto w-full max-w-xs',
    frame: 'ds-photo-frame ds-photo-frame-about',
    width: 360,
    height: 440,
    sizes: '(max-width: 768px) 70vw, 360px',
  },
  nav: {
    wrapper: 'relative size-10 shrink-0',
    frame: 'ds-photo-frame-nav size-10',
    width: 80,
    height: 80,
    sizes: '40px',
  },
} as const

export function ProfileImage({
  variant = 'hero',
  priority = false,
  className = '',
}: ProfileImageProps) {
  const style = variantStyles[variant]

  return (
    <div className={`${style.wrapper} ${className}`.trim()}>
      <div className={`relative ${style.frame} overflow-hidden bg-ink-muted shadow-glow ring-1 ring-line-strong`}>
        <div
          className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-ink/35 via-transparent to-transparent"
          aria-hidden
        />
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={style.width}
          height={style.height}
          sizes={style.sizes}
          priority={priority}
          className="h-full w-full object-cover object-[center_18%]"
        />
      </div>
      {variant === 'hero' ? (
        <>
          <div
            className="pointer-events-none absolute -end-6 top-8 hidden h-24 w-24 rounded-full border border-sage/30 lg:block"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-4 -start-4 hidden h-16 w-16 rounded-2xl bg-terracotta/15 blur-xl lg:block"
            aria-hidden
          />
        </>
      ) : null}
    </div>
  )
}
