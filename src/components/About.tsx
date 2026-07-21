import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
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

        <motion.aside
          variants={fadeUp}
          className="rounded-xl border border-line bg-ink-soft/70 p-6 shadow-soft"
        >
          <p className="font-body text-label uppercase tracking-[0.14em] text-rose-soft">
            {t('about.education')}
          </p>
          <p className="mt-3 font-display text-h3 text-mist">{t('about.school')}</p>
          <p className="mt-1 text-body-sm text-mist-soft">{t('about.degree')}</p>
          <div className="mt-6 flex items-start gap-2 text-body-sm text-mist-dim">
            <MapPin size={16} className="mt-0.5 shrink-0 text-rose-soft" aria-hidden />
            <span>{profile.location}</span>
          </div>
        </motion.aside>
      </motion.div>
    </Section>
  )
}
