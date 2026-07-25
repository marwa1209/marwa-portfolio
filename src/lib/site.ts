import { profile } from '@/data/profile'

export const SITE_URL = 'https://marwa-portfolio-roan.vercel.app'

export const siteConfig = {
  url: SITE_URL,
  name: `${profile.shortName} Mahmoud — Frontend Engineer`,
  title: `${profile.name} | Frontend Engineer Portfolio`,
  shortTitle: `${profile.shortName} Mahmoud — Frontend Engineer`,
  description:
    'Marwa Mahmoud Elsayed — Frontend Engineer in Alexandria, Egypt. Production TypeScript UIs with Angular, React, and Next.js. Bilingual EN/AR (RTL), SSR, SEO, Figma-to-code, and Core Web Vitals.',
  ogDescription:
    'Portfolio of Marwa Mahmoud Elsayed: Angular, React, Next.js, bilingual EN/AR interfaces, SSR, and production frontend delivery for Blue Sky and Sourcya.',
  locale: 'en_EG',
  alternateLocale: 'ar_EG',
  keywords: [
    'Marwa Mahmoud',
    'Marwa Mahmoud Elsayed',
    'Frontend Engineer',
    'Frontend Developer',
    'Angular Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'Alexandria Egypt',
    'Remote Frontend',
    'RTL',
    'Arabic English',
    'SSR',
    'SEO',
    'Figma to code',
    'Blue Sky',
    'Sourcya',
  ],
  author: profile.name,
  email: profile.email,
  github: profile.github,
  linkedin: profile.linkedin,
  location: profile.location,
  googleSiteVerification: '4IceKXz-ZC3lTKbHc6XrvUzXkWLzlErjJZF3Wxbki0s',
} as const
