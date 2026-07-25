import Image from 'next/image'
import { profile } from '@/data/profile'

type ProfileImageProps = {
  priority?: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeStyles = {
  sm: {
    wrapper: 'size-20 sm:size-24',
    dimension: 96,
    sizes: '96px',
  },
  md: {
    wrapper: 'size-28 sm:size-32',
    dimension: 128,
    sizes: '128px',
  },
  lg: {
    wrapper: 'size-36 sm:size-40 lg:size-44',
    dimension: 176,
    sizes: '(max-width: 1024px) 160px, 176px',
  },
} as const

export function ProfileImage({
  priority = false,
  className = '',
  size = 'sm',
}: ProfileImageProps) {
  const style = sizeStyles[size]

  return (
    <div className={`relative shrink-0 ${style.wrapper} ${className}`.trim()}>
      <Image
        src={profile.avatar}
        alt={profile.name}
        width={style.dimension}
        height={style.dimension}
        sizes={style.sizes}
        priority={priority}
        className="size-full rounded-full object-cover object-[center_18%] ring-2 ring-line-strong ring-offset-2 ring-offset-ink shadow-soft"
      />
    </div>
  )
}
