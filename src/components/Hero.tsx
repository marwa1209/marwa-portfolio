import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin } from 'lucide-react'
import { Button } from '@/design-system/Button'
import { Container } from '@/design-system/Section'
import { heroReveal, stagger } from '@/design-system/motion'
import { profile } from '@/data/profile'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-28 md:pb-24 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 ds-mesh" aria-hidden />
      <div className="pointer-events-none absolute inset-0 ds-grain" aria-hidden />

      <motion.div
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-rose/20 blur-[100px]"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-copper/15 blur-[110px]"
        animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />

      <Container className="relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.p
            variants={heroReveal}
            className="mb-6 font-body text-label uppercase tracking-[0.14em] text-rose-soft"
          >
            Frontend Engineer · Alexandria
          </motion.p>

          <motion.h1
            variants={heroReveal}
            className="font-display text-display text-champagne-bright"
          >
            MARWA
          </motion.h1>

          <motion.p
            variants={heroReveal}
            className="mt-6 max-w-2xl font-display text-h1 text-mist text-balance"
          >
            Interfaces that feel calm in English and confident in Arabic.
          </motion.p>

          <motion.p
            variants={heroReveal}
            className="mt-5 max-w-xl text-body text-mist-soft text-pretty"
          >
            {profile.title}
          </motion.p>

          <motion.div
            variants={heroReveal}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="#projects" size="lg">
              View selected work
            </Button>
            <Button href="#contact" variant="ghost" size="lg">
              Get in touch
            </Button>
          </motion.div>

          <motion.div
            variants={heroReveal}
            className="mt-12 flex flex-wrap items-center gap-5 text-sm text-mist-dim"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-champagne-bright"
            >
              <Github size={18} aria-hidden />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-champagne-bright"
            >
              <Linkedin size={18} aria-hidden />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-16 inline-flex items-center gap-2 text-sm text-mist-dim transition-colors hover:text-champagne"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={16} aria-hidden />
          Scroll
        </motion.a>
      </Container>
    </section>
  )
}
