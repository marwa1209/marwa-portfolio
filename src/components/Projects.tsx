import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Section } from '@/design-system/Section'
import { fadeUp, stagger } from '@/design-system/motion'
import { profile } from '@/data/profile'

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected builds and experiments."
      description="Open-source and portfolio pieces that show how I structure UI, state, and delivery."
    >
      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-6 lg:grid-cols-3"
      >
        {profile.projects.map((project) => (
          <motion.li key={project.name} variants={fadeUp} className="h-full">
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 320, damping: 24 }}
              className="group flex h-full flex-col rounded-xl border border-line bg-ink-soft/60 p-6 shadow-soft transition-[border-color,box-shadow] hover:border-rose/40 hover:shadow-glow"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-h3 text-mist transition-colors group-hover:text-champagne-bright">
                  {project.name}
                </h3>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-mist-dim transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-rose-soft"
                  aria-hidden
                />
              </div>
              <p className="mt-3 flex-1 text-body-sm text-mist-soft text-pretty">{project.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-sm border border-line px-2 py-1 text-xs font-medium text-mist-dim"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-champagne transition-colors hover:text-champagne-bright"
                >
                  Code
                  <ExternalLink size={14} aria-hidden />
                </a>
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-rose-soft transition-colors hover:text-rose"
                  >
                    Live demo
                    <ExternalLink size={14} aria-hidden />
                  </a>
                ) : null}
              </div>
            </motion.article>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  )
}
