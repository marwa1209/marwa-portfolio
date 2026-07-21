export const profile = {
  name: 'Marwa Mahmoud',
  fullName: 'Marwa Mahmoud Elsayed',
  brand: 'Marwa',
  role: 'Frontend Engineer',
  headline: 'Interfaces with clarity, rhythm, and bilingual care.',
  summary:
    'I ship production web UIs in TypeScript across Angular, React, and Next.js — with RTL-ready bilingual UX, reusable architecture, and careful Figma-to-code craft.',
  location: 'Alexandria, Egypt',
  email: 'marwamahmoud832001@gmail.com',
  phone: '+20 1223875489',
  github: 'https://github.com/marwa1209',
  linkedin: 'https://www.linkedin.com/in/marwa-mahmoud2',
  resumeNote: 'Open to Frontend Engineer roles — on-site Alexandria/Cairo or remote.',
}

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
] as const

export const experience = [
  {
    company: 'Sourcya',
    role: 'Frontend Engineer',
    type: 'Part-time · Remote',
    dates: 'May 2024 — Present',
    points: [
      'Build React and Next.js products with TypeScript, Tailwind, i18n/RTL, and Framer Motion.',
      'Contribute across NGC, Altatawwar, TMT Cockpit/Eye, Umbrella CRM, and bilingual marketing sites.',
    ],
  },
  {
    company: 'Blue Sky',
    role: 'Frontend Engineer',
    type: 'Full-time · Alexandria',
    dates: 'Aug 2024 — Jun 2026',
    points: [
      'Shipped Angular frontends with SSR, Tailwind, RxJS, and component-driven architecture.',
      'Built Africa Relief (donations + Stripe + SEO) and Precision Platform (multi-role finance dashboard).',
    ],
  },
  {
    company: 'ITI',
    role: 'Full-Stack Intern',
    type: 'Internship · Alexandria',
    dates: 'Nov 2023 — Apr 2024',
    points: [
      'Angular + .NET intensive covering REST APIs, SQL Server, Git, testing, and Agile delivery.',
      'Designed and developed Caregiver with auth, RBAC, and end-to-end staffing workflows.',
    ],
  },
] as const

export const projects = [
  {
    title: 'E-Commerce Angular',
    blurb: 'API storefront with TypeScript, responsive product flows, and polished UI details.',
    stack: ['Angular', 'TypeScript', 'Tailwind'],
    live: 'https://e-commerce-angular-jade.vercel.app',
    repo: 'https://github.com/marwa1209/E-Commerce-Angular-',
  },
  {
    title: 'Caregiver',
    blurb: 'ITI graduation product for healthcare staffing — auth, roles, and full workflow UI.',
    stack: ['Angular', '.NET', 'RBAC'],
    live: null,
    repo: 'https://github.com/marwa1209/Caregiver',
  },
  {
    title: 'FreshCart',
    blurb: 'E-commerce UI built with React and Vite — clean product browsing and cart flows.',
    stack: ['React', 'Vite', 'TypeScript'],
    live: null,
    repo: 'https://github.com/marwa1209/advancedFreshCart',
  },
] as const

export const skills = {
  core: ['TypeScript', 'Angular', 'React', 'Next.js', 'Tailwind CSS'],
  craft: ['SSR / SEO', 'RTL / i18n', 'RxJS', 'TanStack Query', 'Framer Motion'],
  tools: ['Figma', 'Git', 'PrimeNG', 'MUI', 'React Hook Form'],
} as const

export const education = {
  school: 'Alexandria University — Faculty of Science',
  degree: 'Bachelor of Computer Science — Software Industry and Multimedia (SIM)',
  dates: '2019 — 2023',
}
