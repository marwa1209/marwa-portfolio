import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Container } from '@/design-system/Section'
import { navLinks, profile } from '@/data/profile'
import { fadeIn } from '@/design-system/motion'

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={fadeIn}
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-[var(--duration-base)] ${
        scrolled
          ? 'border-b border-line bg-ink/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between md:h-[4.5rem]">
        <a
          href="#top"
          className="font-display text-lg tracking-tight text-champagne-bright transition-colors hover:text-rose-soft"
        >
          {profile.shortName}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-mist-soft transition-colors hover:text-champagne-bright"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-md border border-line-strong px-4 py-2 text-sm font-semibold text-champagne transition hover:border-champagne/50 hover:text-champagne-bright md:inline-flex"
        >
          Say hello
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-line-strong p-2 text-mist md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-line bg-ink-soft/95 backdrop-blur-xl md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-3 text-base font-medium text-mist-soft hover:bg-ink-muted/60 hover:text-champagne-bright"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-md bg-rose px-4 py-3 text-center text-sm font-semibold text-champagne-bright"
              onClick={() => setOpen(false)}
            >
              Say hello
            </a>
          </Container>
        </div>
      ) : null}
    </motion.header>
  )
}
