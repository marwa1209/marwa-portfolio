import type { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'header' | 'footer' | 'main'
  id?: string
}

export function Container({
  children,
  className = '',
  as: Tag = 'div',
  id,
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={`mx-auto w-full max-w-shell px-[clamp(1.25rem,4vw,2.5rem)] ${className}`.trim()}
    >
      {children}
    </Tag>
  )
}

type SectionProps = {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
  className?: string
  number?: string
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = '',
  number,
}: SectionProps) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`.trim()}>
      <Container>
        <header className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            {eyebrow ? (
              <p className="mb-4 font-body text-label uppercase tracking-[0.14em] text-sage-soft">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="font-display text-h2 text-mist text-balance">{title}</h2>
            {description ? (
              <p className="mt-4 max-w-xl text-body text-mist-soft text-pretty">{description}</p>
            ) : null}
          </div>
          {number ? (
            <p
              className="font-display text-5xl leading-none text-line-strong md:text-6xl"
              aria-hidden
            >
              {number}
            </p>
          ) : null}
        </header>
        {children}
      </Container>
    </section>
  )
}
