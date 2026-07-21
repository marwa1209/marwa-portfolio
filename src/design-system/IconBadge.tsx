import type { LucideIcon } from 'lucide-react'

type IconBadgeProps = {
  icon: LucideIcon
  label?: string
  className?: string
}

export function IconBadge({ icon: Icon, label, className = '' }: IconBadgeProps) {
  return (
    <span
      className={`inline-flex size-11 items-center justify-center rounded-md border border-line bg-ink-muted/60 text-champagne ${className}`.trim()}
      aria-hidden={label ? undefined : true}
      aria-label={label}
    >
      <Icon className="size-5" strokeWidth={1.6} />
    </span>
  )
}

type SkillChipProps = {
  children: string
}

export function SkillChip({ children }: SkillChipProps) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-ink-soft/80 px-3.5 py-2 font-body text-body-sm text-mist-soft transition-colors duration-[var(--duration-fast)] hover:border-rose/40 hover:text-mist">
      {children}
    </span>
  )
}
