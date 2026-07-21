import { Container } from '@/design-system/Section'
import { profile } from '@/data/profile'
import { useI18n } from '@/i18n/I18nProvider'

export function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-4 text-sm text-mist-dim md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {profile.name}. {t('footer.rights')}
        </p>
        <p>{t('footer.tagline')}</p>
      </Container>
    </footer>
  )
}
