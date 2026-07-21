import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin } from 'lucide-react'
import { Button } from '@/design-system/Button'
import { Section } from '@/design-system/Section'
import { fadeUp, stagger } from '@/design-system/motion'
import { profile } from '@/data/profile'
import { useI18n } from '@/i18n/I18nProvider'

export function Contact() {
  const { t } = useI18n()

  return (
    <Section
      id="contact"
      eyebrow={t('contact.eyebrow')}
      title={t('contact.title')}
      description={t('contact.description')}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <motion.div variants={fadeUp} className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Button href={`mailto:${profile.email}`} size="lg">
              <Mail size={18} aria-hidden />
              {t('contact.emailCta')}
            </Button>
            <Button href={profile.linkedin} variant="ghost" size="lg">
              <Linkedin size={18} aria-hidden />
              {t('contact.linkedin')}
            </Button>
          </div>
        </motion.div>

        <motion.aside
          variants={fadeUp}
          className="rounded-xl border border-line bg-ink-soft/70 p-6 shadow-soft"
        >
          <ul className="space-y-4 text-body-sm">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 text-mist-soft transition-colors hover:text-champagne-bright"
              >
                <Mail size={18} className="text-rose-soft" aria-hidden />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-3 text-mist-soft transition-colors hover:text-champagne-bright"
              >
                <Phone size={18} className="text-rose-soft" aria-hidden />
                {profile.phone}
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-mist-soft transition-colors hover:text-champagne-bright"
              >
                <Github size={18} className="text-rose-soft" aria-hidden />
                github.com/marwa1209
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-mist-soft transition-colors hover:text-champagne-bright"
              >
                <Linkedin size={18} className="text-rose-soft" aria-hidden />
                marwa-mahmoud2
              </a>
            </li>
          </ul>
        </motion.aside>
      </motion.div>
    </Section>
  )
}
