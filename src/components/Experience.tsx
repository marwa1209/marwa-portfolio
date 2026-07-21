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
      className="border-t border-line/80"
    >
      <motion.ol
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="relative space-y-8 before:absolute before:start-[0.65rem] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-line-strong md:before:start-4"
      >
        {experienceJobs.map((job) => (
          <motion.li
            key={job.company}
            variants={fadeUp}
            className="relative ps-10 md:ps-12"
          >
            <span
              className="absolute start-0 top-2 h-3 w-3 rounded-full border-2 border-rose bg-ink md:start-2.5"
              aria-hidden
            />
            <div className="rounded-xl border border-line bg-ink-muted/40 p-6 transition-colors hover:border-line-strong">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <h3 className="font-display text-h3 text-mist">{job.company}</h3>
                  <p className="mt-1 text-sm font-semibold text-champagne">{t(job.roleKey)}</p>
                </div>
                <p className="text-sm text-mist-dim">{t(job.periodKey)}</p>
              </div>
              <p className="mt-2 text-sm text-rose-soft">{t(job.typeKey)}</p>
              <ul className="mt-4 space-y-2 text-body-sm text-mist-soft">
                {job.highlightKeys.map((key) => (
                  <li key={key} className="flex gap-2">
                    <span className="text-rose" aria-hidden>
                      —
                    </span>
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  )
}
