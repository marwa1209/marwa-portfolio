'use client'

import type { ReactNode } from 'react'
import type { Locale, Theme } from '@/data/projects'
import { I18nProvider } from '@/i18n/I18nProvider'
import { ThemeProvider } from '@/theme/ThemeProvider'

type ProvidersProps = {
  children: ReactNode
  initialTheme: Theme
  initialLocale: Locale
}

export function Providers({ children, initialTheme, initialLocale }: ProvidersProps) {
  return (
    <ThemeProvider initialTheme={initialTheme}>
      <I18nProvider initialLocale={initialLocale}>{children}</I18nProvider>
    </ThemeProvider>
  )
}
