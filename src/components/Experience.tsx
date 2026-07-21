import { motion } from 'framer-motion'
import { Section } from '@/design-system/Section'
import { fadeUp, stagger } from '@/design-system/motion'
import { profile } from '@/data/profile'

export function Experience() {
  return (
    <Section
      id="work"
      eyebrow="Experience"
      title="Where I have shipped and learned."
      description="Production work across Angular and React ecosystems, often with bilingual requirements and tight design handoff."
      className="border-t border-line/80"
    >
      <motion.ol
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="relative space-y-8 before:absolute before:left-[0.65rem] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-line-strong md:before:left-4"
      >
        {profile.experience.map((job) => (
          <motion.li key={job.company + job.period} variants={fadeUp} className="relative pl-10 md:pl-12">
            <span
              className="absolute left-0 top-2 h-3 w-3 rounded-full border-2 border-rose bg-ink md:left-2.5"
              aria-hidden
            />
            <div className="rounded-xl border border-line bg-ink-muted/40 p-6 transition-colors hover:border-line-strong">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <h3 className="font-display text-h3 text-mist">{job.company}</h3>
                  <p className="mt-1 text-sm font-semibold text-champagne">{job.role}</p>
                </div>
                <p className="text-sm text-mist-dim">{job.period}</p>
              </div>
              <p className="mt-2 text-sm text-rose-soft">{job.type}</p>
              <ul className="mt-4 space-y-2 text-body-sm text-mist-soft">
                {job.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-rose" aria-hidden>
                      —
                    </span>
                    <span>{item}</span>
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
