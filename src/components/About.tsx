import { motion } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'
import { ProfileImage } from '@/components/ProfileImage'
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
        className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
      >
        <motion.div variants={fadeUp} className="flex flex-col gap-6">
          <ProfileImage variant="about" />
          <div className="ds-card p-5">
            <div className="flex items-start gap-2 text-body-sm text-mist-dim">
              <MapPin size={16} className="mt-0.5 shrink-0 text-sage-soft" aria-hidden />
              <span>{profile.location}</span>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-6">
          <div className="space-y-5 text-body text-mist-soft text-pretty">
            <p>{t('about.body')}</p>
            <p>{t('about.extra')}</p>
          </div>

          <aside className="ds-card border-sage/20 p-6">
            <div className="flex items-center gap-2 font-body text-label uppercase tracking-[0.14em] text-sage-soft">
              <GraduationCap size={16} aria-hidden />
              {t('about.education')}
            </div>
            <p className="mt-3 font-display text-h3 text-mist">{t('about.school')}</p>
            <p className="mt-1 text-body-sm text-mist-soft">{t('about.degree')}</p>
          </aside>
        </motion.div>
      </motion.div>
    </Section>
  )
}
