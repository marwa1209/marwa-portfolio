import type { Metadata, Viewport } from 'next'
import { cookies } from 'next/headers'
import { Fraunces, IBM_Plex_Sans_Arabic, Manrope } from 'next/font/google'
import type { Locale, Theme } from '@/data/projects'
import {
  LOCALE_COOKIE,
  THEME_COOKIE,
  parseLocale,
  parseTheme,
  themeInitScript,
} from '@/lib/preferences'
import { siteConfig, SITE_URL } from '@/lib/site'
import { Providers } from './providers'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['500', '600', '700'],
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#080b14' },
    { media: '(prefers-color-scheme: light)', color: '#f6f1ea' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteConfig.shortTitle,
    template: `%s | ${siteConfig.author.split(' ')[0]} Mahmoud`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.author, url: siteConfig.linkedin }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  category: 'technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    alternateLocale: [siteConfig.alternateLocale],
    url: SITE_URL,
    title: siteConfig.title,
    description: siteConfig.ogDescription,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.ogDescription,
    creator: '@marwa1209',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
      ar: SITE_URL,
      'x-default': SITE_URL,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  verification: {
    google: siteConfig.googleSiteVerification,
  },
  other: {
    'google-site-verification': siteConfig.googleSiteVerification,
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const initialTheme = parseTheme(cookieStore.get(THEME_COOKIE)?.value) as Theme
  const initialLocale = parseLocale(cookieStore.get(LOCALE_COOKIE)?.value) as Locale
  const dir = initialLocale === 'ar' ? 'rtl' : 'ltr'

  return (
    <html
      lang={initialLocale}
      dir={dir}
      data-theme={initialTheme}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${fraunces.variable} ${manrope.variable} ${arabic.variable} antialiased`}
      >
        <Providers initialTheme={initialTheme} initialLocale={initialLocale}>
          {children}
        </Providers>
      </body>
    </html>
  )
}
