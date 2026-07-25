import { motion } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'
import { Section } from '@/design-system/Section'
import { fadeUp, stagger } from '@/design-system/motion'
import { profile } from '@/data/profile'
import { useI18n } from '@/i18n/I18nProvider'

export function About() {
  const { t } = useI18n()

  return (
    <Section
      id="about"
      eyebrow={t('about.eyebrow')}
      title={t('about.title')}
      description={t('about.description')}
      number="01"
      className="ds-section-band"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-16"
      >
        <motion.div variants={fadeUp} className="space-y-5 text-body text-mist-soft text-pretty">
          <p>{t('about.body')}</p>
          <p>{t('about.extra')}</p>
        </motion.div>

        <motion.aside variants={fadeUp} className="space-y-5">
          <div className="ds-card p-6">
            <div className="flex items-center gap-2 font-body text-label uppercase tracking-[0.14em] text-sage-soft">
              <GraduationCap size={16} aria-hidden />
              {t('about.education')}
            </div>
            <p className="mt-3 font-display text-h3 text-mist">{t('about.school')}</p>
            <p className="mt-1 text-body-sm text-mist-soft">{t('about.degree')}</p>
          </div>

          <div className="ds-card p-5">
            <div className="flex items-start gap-2 text-body-sm text-mist-dim">
              <MapPin size={16} className="mt-0.5 shrink-0 text-sage-soft" aria-hidden />
              <span>{profile.location}</span>
            </div>
          </div>
        </motion.aside>
      </motion.div>
    </Section>
  )
}
