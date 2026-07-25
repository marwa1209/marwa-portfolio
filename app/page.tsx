import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import { SeoContent } from '@/components/SeoContent'
import { PortfolioApp } from '@/PortfolioApp'
import { siteConfig, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.ogDescription,
    url: SITE_URL,
  },
  twitter: {
    title: siteConfig.title,
    description: siteConfig.ogDescription,
  },
}

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <SeoContent />
      <PortfolioApp />
    </>
  )
}
