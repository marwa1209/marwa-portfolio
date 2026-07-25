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
      number="04"
      className="ds-section-band"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-5 md:grid-cols-2"
      >
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.labelKey}
            variants={fadeUp}
            className={`ds-card p-6 ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
          >
            <h3 className="font-body text-label uppercase tracking-[0.14em] text-sage-soft">
              {t(group.labelKey)}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li key={skill} className="ds-stack-pill">
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
