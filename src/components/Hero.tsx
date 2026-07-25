import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, MapPin, Sparkles } from 'lucide-react'
import { HeroAvatar } from '@/components/HeroAvatar'
import { Button } from '@/design-system/Button'
import { Container } from '@/design-system/Section'
import { heroReveal, pillPop, stagger } from '@/design-system/motion'
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

      <motion.div
        className="pointer-events-none absolute -left-20 top-16 h-64 w-64 rounded-full bg-sage/10 blur-[90px]"
        animate={{ x: [0, 24, 0], y: [0, -16, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -right-10 bottom-20 h-72 w-72 rounded-full bg-terracotta/10 blur-[100px]"
        animate={{ x: [0, -20, 0], y: [0, 18, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          <motion.div
            key={locale}
            variants={stagger}
            initial="hidden"
            animate="show"
            className="order-2 max-w-2xl lg:order-1"
          >
            <motion.div variants={heroReveal} className="ds-badge mb-8">
              <Sparkles size={14} aria-hidden />
              {t('hero.eyebrow')}
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
              className="mt-8 font-display text-h2 text-mist text-balance"
            >
              {t('hero.headline')}
            </motion.p>

            <motion.p
              variants={heroReveal}
              className="mt-5 text-body text-mist-soft text-pretty"
            >
              {t('hero.summary')}
            </motion.p>

            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-wrap gap-2"
            >
              {stackPills.map((item) => (
                <motion.span
                  key={item}
                  variants={pillPop}
                  whileHover={{ y: -3, scale: 1.04 }}
                  className="ds-stack-pill cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              variants={heroReveal}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button href="#projects" size="lg">
                  {t('hero.ctaProjects')}
                </Button>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button href="#contact" variant="ghost" size="lg">
                  {t('hero.ctaContact')}
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={heroReveal}
              className="mt-10 flex flex-wrap items-center gap-6 text-sm text-mist-dim"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-sage-soft" aria-hidden />
                {profile.location}
              </span>
              <motion.a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-champagne-bright"
                whileHover={{ y: -2 }}
              >
                <Github size={18} aria-hidden />
                GitHub
              </motion.a>
              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-champagne-bright"
                whileHover={{ y: -2 }}
              >
                <Linkedin size={18} aria-hidden />
                LinkedIn
              </motion.a>
            </motion.div>
          </motion.div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <HeroAvatar />
          </div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-14 inline-flex items-center gap-2 text-sm text-mist-dim transition-colors hover:text-sage-soft"
          aria-label={t('nav.about')}
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex"
          >
            <ArrowDown size={16} aria-hidden />
          </motion.span>
        </motion.a>
      </Container>
    </section>
  )
}
