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

      <Container className="relative z-10 max-w-4xl">
        <motion.div
          key={locale}
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={heroReveal}
            className="mb-8 flex flex-wrap items-center gap-4"
          >
            <ProfileImage priority />
            <div className="ds-badge">
              <Sparkles size={14} aria-hidden />
              {t('hero.eyebrow')}
            </div>
          </motion.div>

          <motion.div variants={heroReveal}>
            <p className="font-display text-display text-champagne-bright text-balance">
              {isAr ? 'مروة محمود' : 'Marwa Mahmoud'}
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
            className="mt-8 max-w-2xl font-display text-h2 text-mist text-balance"
          >
            {t('hero.headline')}
          </motion.p>

          <motion.p
            variants={heroReveal}
            className="mt-5 max-w-xl text-body text-mist-soft text-pretty"
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
