export const profile = {
  name: 'Marwa Mahmoud Elsayed',
  shortName: 'Marwa',
  email: 'marwamahmoud832001@gmail.com',
  phone: '+20 1223875489',
  github: 'https://github.com/marwa1209',
  linkedin: 'https://www.linkedin.com/in/marwa-mahmoud2',
  location: 'Alexandria, Egypt',
} as const

export const skillGroups = [
  {
    labelKey: 'skills.core',
    items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Responsive UI'],
  },
  {
    labelKey: 'skills.frameworks',
    items: ['Angular', 'React', 'Next.js'],
  },
  {
    labelKey: 'skills.focus',
    items: ['RTL / i18n', 'SSR & SEO', 'REST APIs', 'Figma to code', 'Core Web Vitals'],
  },
  {
    labelKey: 'skills.tools',
    items: ['Git', 'Vite', 'Tailwind', 'Stripe', 'PrimeNG', 'MUI'],
  },
] as const

export const experienceJobs = [
  {
    company: 'Sourcya',
    roleKey: 'exp.sourcya.role',
    typeKey: 'exp.sourcya.type',
    periodKey: 'exp.sourcya.period',
    highlightKeys: ['exp.sourcya.h1', 'exp.sourcya.h2'],
  },
  {
    company: 'Blue Sky',
    roleKey: 'exp.bluesky.role',
    typeKey: 'exp.bluesky.type',
    periodKey: 'exp.bluesky.period',
    highlightKeys: ['exp.bluesky.h1', 'exp.bluesky.h2'],
  },
  {
    company: 'ITI',
    roleKey: 'exp.iti.role',
    typeKey: 'exp.iti.type',
    periodKey: 'exp.iti.period',
    highlightKeys: ['exp.iti.h1'],
  },
] as const
