import { motion } from 'framer-motion'
import { Section } from '@/design-system/Section'
import { fadeUp, stagger } from '@/design-system/motion'
import { experienceJobs } from '@/data/profile'
import { useI18n } from '@/i18n/I18nProvider'

export function Experience() {
  const { t } = useI18n()

  return (
    <Section
      id="work"
      eyebrow={t('work.eyebrow')}
      title={t('work.title')}
      description={t('work.description')}
      number="02"
      className="ds-section-band"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-5 lg:grid-cols-3"
      >
        {experienceJobs.map((job, index) => (
          <motion.article
            key={job.company}
            variants={fadeUp}
            className="ds-card group flex h-full flex-col p-6 transition-[border-color,transform] hover:-translate-y-1 hover:border-sage/30"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="font-display text-3xl leading-none text-line-strong">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sage-soft">
                {t(job.typeKey)}
              </p>
            </div>

            <h3 className="mt-6 font-display text-h3 text-mist">{job.company}</h3>
            <p className="mt-1 text-sm font-semibold text-terracotta">{t(job.roleKey)}</p>
            <p className="mt-3 text-sm text-mist-dim">{t(job.periodKey)}</p>

            <ul className="mt-5 flex-1 space-y-2.5 border-t border-line pt-5 text-body-sm text-mist-soft">
              {job.highlightKeys.map((key) => (
                <li key={key} className="flex gap-2">
                  <span className="text-sage-soft" aria-hidden>
                    •
                  </span>
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}
