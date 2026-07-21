export const profile = {
  name: 'Marwa Mahmoud Elsayed',
  shortName: 'Marwa',
  title:
    'Frontend Engineer | Angular · React · Next.js · TypeScript | Bilingual EN/AR (RTL)',
  location: 'Alexandria, Egypt',
  email: 'marwamahmoud832001@gmail.com',
  phone: '+20 1223875489',
  github: 'https://github.com/marwa1209',
  linkedin: 'https://www.linkedin.com/in/marwa-mahmoud2',
  about:
    'Frontend Engineer with 2+ years shipping production web interfaces in TypeScript across Angular, React, and Next.js. I specialize in bilingual EN/AR RTL experiences, SSR and SEO, reusable component systems, Figma-to-code delivery, REST APIs, and Core Web Vitals.',
  education: {
    school: 'Alexandria University',
    degree: 'B.CS SIM',
    years: '2019–2023',
  },
  experience: [
    {
      company: 'Sourcya',
      role: 'Frontend Engineer',
      type: 'Part-time · Remote',
      period: 'May 2024 – Present',
      highlights: [
        'React and Next.js products including NGC, Altatawwar, TMT Cockpit/Eye, and Umbrella CRM.',
        'Bilingual marketing sites with EN/AR RTL and performance-focused delivery.',
      ],
    },
    {
      company: 'Blue Sky',
      role: 'Frontend Engineer',
      type: 'Full-time · Alexandria',
      period: 'Aug 2024 – Jun 2026',
      highlights: [
        'Africa Relief — donations flow, Stripe integration, and SSR for reach and SEO.',
        'Precision Platform — finance dashboard with data-heavy UI and reusable Angular patterns.',
      ],
    },
    {
      company: 'ITI Internship',
      role: 'Trainee Developer',
      type: 'Alexandria',
      period: 'Nov 2023 – Apr 2024',
      highlights: [
        'Caregiver platform built with Angular and .NET in a cross-functional team setting.',
      ],
    },
  ],
  projects: [
    {
      name: 'Caregiver',
      description:
        'Healthcare companion app from ITI internship — Angular front end with structured modules and API integration.',
      stack: ['Angular', 'TypeScript', '.NET'],
      github: 'https://github.com/marwa1209/Caregiver',
      live: null,
    },
    {
      name: 'E-Commerce Angular',
      description:
        'Full storefront experience with cart, catalog, and polished UI patterns deployed for real users.',
      stack: ['Angular', 'TypeScript', 'RxJS'],
      github: 'https://github.com/marwa1209/E-Commerce-Angular-',
      live: 'https://e-commerce-angular-jade.vercel.app',
    },
    {
      name: 'FreshCart',
      description:
        'Advanced grocery e-commerce with auth, cart state, and component-driven layout.',
      stack: ['Angular', 'Bootstrap', 'APIs'],
      github: 'https://github.com/marwa1209/advancedFreshCart',
      live: null,
    },
  ],
  skillGroups: [
    {
      label: 'Core',
      items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Responsive UI'],
    },
    {
      label: 'Frameworks',
      items: ['Angular', 'React', 'Next.js'],
    },
    {
      label: 'Focus',
      items: ['RTL / i18n', 'SSR & SEO', 'REST APIs', 'Figma to code', 'Core Web Vitals'],
    },
    {
      label: 'Tools',
      items: ['Git', 'Vite', 'Tailwind', 'Stripe integrations'],
    },
  ],
} as const

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
] as const
