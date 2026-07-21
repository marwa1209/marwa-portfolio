import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'ghost' | 'link'
type Size = 'md' | 'lg'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
  children: ReactNode
  asChild?: boolean
  href?: string
}

const base =
  'inline-flex items-center justify-center gap-2 font-body font-semibold transition-[transform,background-color,color,border-color,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-out)] disabled:opacity-50 disabled:pointer-events-none'

const sizes: Record<Size, string> = {
  md: 'min-h-11 px-5 text-sm rounded-md',
  lg: 'min-h-12 px-6 text-sm rounded-md',
}

const variants: Record<Variant, string> = {
  primary:
    'bg-rose text-champagne-bright shadow-glow hover:bg-rose-deep hover:-translate-y-0.5 active:translate-y-0',
  ghost:
    'border border-line-strong text-mist bg-transparent hover:border-champagne/50 hover:text-champagne-bright hover:-translate-y-0.5',
  link: 'px-0 min-h-0 text-champagne hover:text-champagne-bright underline-offset-4 hover:underline rounded-sm',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
