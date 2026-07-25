import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, MapPin, Sparkles } from 'lucide-react'
import { Button } from '@/design-system/Button'
import { Container } from '@/design-system/Section'
import { heroReveal, stagger } from '@/design-system/motion'
import { ProfileImage } from '@/components/ProfileImage'
import { profile } from '@/data/profile'
import { useI18n } from '@/i18n/I18nProvider'

const stackPills = ['Angular', 'React', 'Next.js', 'TypeScript', 'RTL / i18n']

export function Hero() {
  const { t, locale } = useI18n()
  const isAr = locale === 'ar'

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-14 pt-28 md:pb-20 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 ds-mesh" aria-hidden />
      <div className="pointer-events-none absolute inset-0 ds-grain" aria-hidden />

      <div
        className="pointer-events-none absolute -left-20 top-16 h-64 w-64 rounded-full bg-sage/10 blur-[90px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-10 bottom-20 h-72 w-72 rounded-full bg-terracotta/10 blur-[100px]"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          <motion.div
            key={locale}
            variants={stagger}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1"
          >
            <motion.div variants={heroReveal} className="ds-badge mb-8">
              <Sparkles size={14} aria-hidden />
              {t('hero.eyebrow')}
            </motion.div>

            <motion.div variants={heroReveal} className="space-y-1">
              <p className="font-display text-display text-champagne-bright text-balance">
                {isAr ? 'مروة محمود' : 'Marwa Mahmoud'}
              </p>
              <p className="font-display text-h1 text-mist/90">
                {isAr ? 'Elsayed' : 'Elsayed'}
                <span className="text-terracotta">.</span>
              </p>
            </motion.div>

            <motion.p
              variants={heroReveal}
              className="mt-3 font-body text-label uppercase tracking-[0.16em] text-sage-soft"
            >
              {isAr ? 'مهندسة واجهات أمامية' : 'Frontend Engineer'}
            </motion.p>

            <motion.p
              variants={heroReveal}
              className="mt-8 max-w-xl font-display text-h2 text-mist text-balance"
            >
              {t('hero.headline')}
            </motion.p>

            <motion.p
              variants={heroReveal}
              className="mt-5 max-w-lg text-body text-mist-soft text-pretty"
            >
              {t('hero.summary')}
            </motion.p>

            <motion.div
              variants={heroReveal}
              className="mt-8 flex flex-wrap gap-2"
            >
              {stackPills.map((item) => (
                <span key={item} className="ds-stack-pill">
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={heroReveal}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href="#projects" size="lg">
                {t('hero.ctaProjects')}
              </Button>
              <Button href="#contact" variant="ghost" size="lg">
                {t('hero.ctaContact')}
              </Button>
            </motion.div>

            <motion.div
              variants={heroReveal}
              className="mt-10 flex flex-wrap items-center gap-6 text-sm text-mist-dim"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-sage-soft" aria-hidden />
                {profile.location}
              </span>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-champagne-bright"
              >
                <Github size={18} aria-hidden />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-champagne-bright"
              >
                <Linkedin size={18} aria-hidden />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <ProfileImage variant="hero" priority />
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-14 inline-flex items-center gap-2 text-sm text-mist-dim transition-colors hover:text-sage-soft"
          aria-label={t('nav.about')}
        >
          <ArrowDown size={16} aria-hidden />
        </motion.a>
      </Container>
    </section>
  )
}
