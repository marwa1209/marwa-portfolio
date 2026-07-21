import { motion } from 'framer-motion'
import { Section } from '@/design-system/Section'
import { fadeUp, stagger } from '@/design-system/motion'
import { skillGroups } from '@/data/profile'
import { useI18n } from '@/i18n/I18nProvider'

export function Skills() {
  const { t } = useI18n()

  return (
    <Section
      id="skills"
      eyebrow={t('skills.eyebrow')}
      title={t('skills.title')}
      description={t('skills.description')}
      className="border-t border-line/80"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-6 md:grid-cols-2"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.labelKey}
            variants={fadeUp}
            className="rounded-xl border border-line bg-ink-muted/35 p-6"
          >
            <h3 className="font-body text-label uppercase tracking-[0.14em] text-rose-soft">
              {t(group.labelKey)}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md bg-ink-soft px-3 py-1.5 text-sm font-medium text-mist-soft ring-1 ring-line"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
