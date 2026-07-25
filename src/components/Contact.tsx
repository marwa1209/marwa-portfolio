import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin } from 'lucide-react'
import { ProfileImage } from '@/components/ProfileImage'
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
      number="05"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <motion.div
          variants={fadeUp}
          className="relative overflow-hidden rounded-[1.75rem] border border-line bg-ink-soft/70 p-8 shadow-soft"
        >
          <div
            className="pointer-events-none absolute -end-8 -top-8 h-32 w-32 rounded-full bg-sage/10 blur-2xl"
            aria-hidden
          />
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="mx-auto shrink-0 sm:mx-0">
              <ProfileImage size="md" />
            </div>
            <div className="space-y-4 text-center sm:text-start">
              <p className="font-display text-h3 text-mist">{profile.name}</p>
              <p className="text-body-sm text-mist-soft">{t('contact.description')}</p>
              <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
                <Button href={`mailto:${profile.email}`} size="lg">
                  <Mail size={18} aria-hidden />
                  {t('contact.emailCta')}
                </Button>
                <Button href={profile.linkedin} variant="ghost" size="lg">
                  <Linkedin size={18} aria-hidden />
                  {t('contact.linkedin')}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.aside variants={fadeUp} className="ds-card p-6">
          <ul className="space-y-4 text-body-sm">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 text-mist-soft transition-colors hover:text-champagne-bright"
              >
                <Mail size={18} className="text-sage-soft" aria-hidden />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-3 text-mist-soft transition-colors hover:text-champagne-bright"
              >
                <Phone size={18} className="text-sage-soft" aria-hidden />
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
                <Github size={18} className="text-sage-soft" aria-hidden />
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
                <Linkedin size={18} className="text-sage-soft" aria-hidden />
                marwa-mahmoud2
              </a>
            </li>
          </ul>
        </motion.aside>
      </motion.div>
    </Section>
  )
}
