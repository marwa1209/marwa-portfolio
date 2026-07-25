import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Languages, Menu, Moon, Sun, X } from 'lucide-react'
import { Container } from '@/design-system/Section'
import { fadeIn } from '@/design-system/motion'
import { useActiveSection, sectionHrefToId } from '@/hooks/useActiveSection'
import { profile } from '@/data/profile'
import { useI18n } from '@/i18n/I18nProvider'
import { navKeys } from '@/i18n/messages'
import { useTheme } from '@/theme/ThemeProvider'

const sectionIds = ['top', 'about', 'work', 'projects', 'skills', 'contact'] as const

export function Nav() {
  const { t, locale, setLocale } = useI18n()
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection(sectionIds)

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

  const isActive = (href: string) => activeSection === sectionHrefToId(href)

  const linkClass = (href: string, mobile = false) => {
    const active = isActive(href)

    if (mobile) {
      return `relative rounded-xl px-3 py-3 font-display text-xl transition-colors ${
        active ? 'text-champagne-bright' : 'text-mist'
      }`
    }

    return `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
      active ? 'text-champagne-bright' : 'text-mist-soft hover:text-champagne-bright'
    }`
  }

  const controls = (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={toggleTheme}
        className="inline-flex size-10 items-center justify-center rounded-full border border-line text-mist-soft transition-colors hover:border-sage/40 hover:text-champagne-bright"
        aria-label={theme === 'dark' ? t('nav.themeToLight') : t('nav.themeToDark')}
      >
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </button>
      <button
        type="button"
        onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')}
        className="inline-flex h-10 items-center gap-1.5 rounded-full border border-line px-3 text-sm font-semibold text-mist-soft transition-colors hover:border-sage/40 hover:text-champagne-bright"
        aria-label={locale === 'en' ? t('nav.langToAr') : t('nav.langToEn')}
      >
        <Languages size={16} />
        {locale === 'en' ? 'ع' : 'EN'}
      </button>
    </div>
  )

  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={fadeIn}
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color,box-shadow] duration-[var(--duration-base)] ${
        scrolled || open
          ? 'border-b border-line bg-ink/85 shadow-soft backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <Container className="flex h-[4.25rem] items-center justify-between md:h-[4.75rem]">
        <a
          href="#top"
          className={`font-display text-base tracking-tight transition-opacity hover:opacity-90 md:text-lg ${
            activeSection === 'top' ? 'text-champagne-bright' : 'text-champagne-bright'
          }`}
        >
          {profile.shortName}
          <span className="hidden text-mist-dim sm:inline"> Mahmoud</span>
          <span className="text-terracotta">.</span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-line bg-ink-soft/50 p-1 md:flex" aria-label="Primary">
          {navKeys.map((link) => {
            const active = isActive(link.href)

            return (
              <a
                key={link.href}
                href={link.href}
                className={linkClass(link.href)}
                aria-current={active ? 'page' : undefined}
              >
                {active ? (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-terracotta/15 ring-1 ring-terracotta/25"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                ) : null}
                <span className="relative z-10">{t(link.key)}</span>
              </a>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {controls}
          <a
            href="#contact"
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              activeSection === 'contact'
                ? 'bg-terracotta-deep text-cream ring-2 ring-terracotta/40'
                : 'bg-terracotta text-cream hover:bg-terracotta-deep hover:text-champagne-bright'
            }`}
          >
            {t('nav.hello')}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {controls}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-line-strong p-2 text-mist"
            aria-expanded={open}
            aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-line bg-ink-soft/95 backdrop-blur-xl md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navKeys.map((link) => {
              const active = isActive(link.href)

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={linkClass(link.href, true)}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-active-pill-mobile"
                      className="absolute inset-0 rounded-xl bg-terracotta/12 ring-1 ring-terracotta/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  <span className="relative z-10">{t(link.key)}</span>
                </a>
              )
            })}
            <a
              href="#contact"
              className="mt-2 rounded-full bg-terracotta px-4 py-3 text-center text-sm font-semibold text-cream"
              onClick={() => setOpen(false)}
            >
              {t('nav.hello')}
            </a>
          </Container>
        </div>
      ) : null}
    </motion.header>
  )
}
