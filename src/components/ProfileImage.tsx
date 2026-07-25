import Image from 'next/image'
import { profile } from '@/data/profile'

type ProfileImageProps = {
  priority?: boolean
  className?: string
}

export function ProfileImage({ priority = false, className = '' }: ProfileImageProps) {
  return (
    <div
      className={`relative size-20 shrink-0 sm:size-24 ${className}`.trim()}
    >
      <Image
        src={profile.avatar}
        alt={profile.name}
        width={96}
        height={96}
        sizes="96px"
        priority={priority}
        className="size-full rounded-full object-cover object-[center_18%] ring-2 ring-line-strong ring-offset-2 ring-offset-ink shadow-soft"
      />
    </div>
  )
}
