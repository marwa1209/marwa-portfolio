import { profile } from '@/data/profile'
import { siteConfig, SITE_URL } from './site'

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: profile.name,
    givenName: profile.shortName,
    familyName: 'Mahmoud Elsayed',
    jobTitle: 'Frontend Engineer',
    description: siteConfig.description,
    url: SITE_URL,
    email: profile.email,
    telephone: profile.phone,
    image: `${SITE_URL}/opengraph-image`,
    sameAs: [profile.github, profile.linkedin],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Alexandria',
      addressCountry: 'EG',
    },
    knowsAbout: [
      'Angular',
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'SSR',
      'SEO',
      'RTL localization',
      'Figma to code',
    ],
    worksFor: [
      { '@type': 'Organization', name: 'Blue Sky' },
      { '@type': 'Organization', name: 'Sourcya' },
    ],
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: ['en', 'ar'],
    publisher: { '@id': `${SITE_URL}/#person` },
  }
}

export function profilePageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${SITE_URL}/#profilepage`,
    url: SITE_URL,
    name: siteConfig.title,
    description: siteConfig.description,
    inLanguage: ['en', 'ar'],
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#person` },
    mainEntity: { '@id': `${SITE_URL}/#person` },
  }
}

export function breadcrumbJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
    ],
  }
}

export function portfolioJsonLdGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      personJsonLd(),
      websiteJsonLd(),
      profilePageJsonLd(),
      breadcrumbJsonLd(),
    ],
  }
}
