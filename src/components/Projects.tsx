import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Building2, Lock } from 'lucide-react'
import { Section } from '@/design-system/Section'
import { fadeUp, stagger } from '@/design-system/motion'
import { companyProjects, type CompanyFilter } from '@/data/projects'
import { useI18n } from '@/i18n/I18nProvider'

export function Projects() {
  const { t, locale } = useI18n()
  const [filter, setFilter] = useState<CompanyFilter>('all')

  const filters: { id: CompanyFilter; label: string }[] = [
    { id: 'all', label: t('projects.filterAll') },
    { id: 'blue-sky', label: t('projects.filterBlueSky') },
    { id: 'sourcya', label: t('projects.filterSourcya') },
  ]

  const visible = useMemo(
    () =>
      filter === 'all'
        ? companyProjects
        : companyProjects.filter((project) => project.company === filter),
    [filter],
  )

  return (
    <Section
      id="projects"
      eyebrow={t('projects.eyebrow')}
      title={t('projects.title')}
      description={t('projects.description')}
      number="03"
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((item) => {
          const active = filter === item.id
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                active
                  ? 'border-terracotta bg-terracotta text-cream'
                  : 'border-line text-mist-soft hover:border-sage/40 hover:text-champagne-bright'
              }`}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      <motion.ul
        key={filter}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {visible.map((project, index) => (
          <motion.li
            key={project.id}
            variants={fadeUp}
            className={`h-full ${index === 0 && visible.length > 2 ? 'md:col-span-2 xl:col-span-1' : ''}`}
          >
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 320, damping: 24 }}
              className="group flex h-full flex-col rounded-[1.25rem] border border-line bg-ink-soft/55 p-6 shadow-soft transition-[border-color,box-shadow] hover:border-sage/35 hover:shadow-glow"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-mist-dim">
                  <Building2 size={12} aria-hidden />
                  {project.company === 'blue-sky'
                    ? t('projects.companyBlueSky')
                    : t('projects.companySourcya')}
                </span>
                {project.live ? (
                  <ArrowUpRight
                    size={18}
                    className="text-mist-dim transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sage-soft rtl:group-hover:-translate-x-0.5"
                    aria-hidden
                  />
                ) : (
                  <Lock size={16} className="text-mist-dim" aria-hidden />
                )}
              </div>

              <h3 className="mt-5 font-display text-h3 text-mist transition-colors group-hover:text-champagne-bright">
                {project.name[locale]}
              </h3>
              <p className="mt-3 flex-1 text-body-sm text-mist-soft text-pretty">
                {project.description[locale]}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech} className="ds-stack-pill text-xs">
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-line pt-4">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-terracotta transition-colors hover:text-champagne-bright"
                  >
                    {t('projects.live')}
                    <ArrowUpRight size={14} aria-hidden />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-mist-dim">
                    <Lock size={14} aria-hidden />
                    {t('projects.private')}
                  </span>
                )}
              </div>
            </motion.article>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  )
}
