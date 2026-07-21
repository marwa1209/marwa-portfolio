import { motion } from 'framer-motion'
import { Section, fadeUp, stagger } from '../design-system'
import { experience } from '../data/content'

export function Work() {
  return (
    <Section
      id="work"
      eyebrow="Experience"
      title="Where the work happened."
      description="Product teams, real users, and frontends that had to hold up in production."
      className="border-y border-line bg-ink-soft/35"
    >
      <motion.ol
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-0"
      >
        {experience.map((job) => (
          <motion.li
            key={job.company}
            variants={fadeUp}
            className="grid gap-4 border-t border-line py-8 md:grid-cols-[14rem_1fr] md:gap-10"
          >
            <div>
              <p className="font-body text-label uppercase tracking-[0.14em] text-mist-dim">
                {job.dates}
              </p>
              <p className="mt-2 text-body-sm text-mist-soft">{job.type}</p>
            </div>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-h3 text-mist">{job.role}</h3>
                <span className="text-rose-soft">·</span>
                <p className="text-champagne">{job.company}</p>
              </div>
              <ul className="mt-4 space-y-2">
                {job.points.map((point) => (
                  <li key={point} className="text-body-sm text-mist-soft text-pretty">
                    <span className="mr-2 text-rose">▸</span>
                    {point}
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
