import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { Section } from '@/design-system/Section'
import { fadeUp, stagger } from '@/design-system/motion'
import { profile } from '@/data/profile'

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Building web products with clarity, care, and RTL in mind."
      description="From marketing sites to dashboards and donation flows, I focus on maintainable front ends and thoughtful UX."
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-16"
      >
        <motion.div variants={fadeUp} className="space-y-5 text-body text-mist-soft text-pretty">
          <p>{profile.about}</p>
          <p>
            Based in {profile.location}, I collaborate with product and design teams to ship
            bilingual experiences, improve performance, and turn Figma specs into reusable
            components.
          </p>
        </motion.div>

        <motion.aside
          variants={fadeUp}
          className="rounded-xl border border-line bg-ink-soft/70 p-6 shadow-soft"
        >
          <p className="font-body text-label uppercase tracking-[0.14em] text-rose-soft">Education</p>
          <p className="mt-3 font-display text-h3 text-mist">{profile.education.school}</p>
          <p className="mt-1 text-body-sm text-mist-soft">
            {profile.education.degree} · {profile.education.years}
          </p>
          <div className="mt-6 flex items-start gap-2 text-body-sm text-mist-dim">
            <MapPin size={16} className="mt-1 shrink-0 text-rose-soft" aria-hidden />
            <span>{profile.location}</span>
          </div>
        </motion.aside>
      </motion.div>
    </Section>
  )
}
