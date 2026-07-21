import type { Locale } from '@/data/projects'

type Dict = Record<string, string>

const en: Dict = {
  'nav.about': 'About',
  'nav.work': 'Work',
  'nav.projects': 'Projects',
  'nav.skills': 'Skills',
  'nav.contact': 'Contact',
  'nav.hello': 'Say hello',
  'nav.openMenu': 'Open menu',
  'nav.closeMenu': 'Close menu',
  'nav.themeToLight': 'Switch to light mode',
  'nav.themeToDark': 'Switch to dark mode',
  'nav.langToAr': 'العربية',
  'nav.langToEn': 'English',

  'hero.eyebrow': 'Frontend Engineer · Alexandria, Egypt',
  'hero.headline': 'Interfaces with clarity, rhythm, and bilingual care.',
  'hero.summary':
    'I ship production web UIs in TypeScript across Angular, React, and Next.js — with RTL-ready bilingual UX, reusable architecture, and careful Figma-to-code craft.',
  'hero.ctaProjects': 'View projects',
  'hero.ctaContact': 'Contact me',

  'about.eyebrow': 'About',
  'about.title': 'Building web products with clarity, care, and RTL in mind.',
  'about.description':
    'From marketing sites to dashboards and donation flows, I focus on maintainable front ends and thoughtful UX.',
  'about.body':
    'Frontend Engineer with 2+ years shipping production web interfaces in TypeScript across Angular, React, and Next.js. I specialize in bilingual EN/AR RTL experiences, SSR and SEO, reusable component systems, Figma-to-code delivery, REST APIs, and Core Web Vitals.',
  'about.extra':
    'Based in Alexandria, Egypt, I collaborate with product and design teams to ship bilingual experiences, improve performance, and turn Figma specs into reusable components.',
  'about.education': 'Education',
  'about.school': 'Alexandria University',
  'about.degree': 'B.CS — Software Industry and Multimedia (SIM) · 2019–2023',

  'work.eyebrow': 'Experience',
  'work.title': 'Where the work happened.',
  'work.description': 'Product teams, real users, and frontends that had to hold up in production.',

  'exp.sourcya.role': 'Frontend Engineer',
  'exp.sourcya.type': 'Part-time · Remote',
  'exp.sourcya.period': 'May 2024 – Present',
  'exp.sourcya.h1':
    'React and Next.js products including NGC, Altatawwar, TMT Cockpit/Eye, and Umbrella CRM.',
  'exp.sourcya.h2': 'Bilingual marketing sites with EN/AR RTL and performance-focused delivery.',

  'exp.bluesky.role': 'Frontend Engineer',
  'exp.bluesky.type': 'Full-time · Alexandria',
  'exp.bluesky.period': 'Aug 2024 – Jun 2026',
  'exp.bluesky.h1': 'Africa Relief — donations flow, Stripe integration, and SSR for reach and SEO.',
  'exp.bluesky.h2':
    'Precision Platform — finance dashboard with data-heavy UI and reusable Angular patterns.',

  'exp.iti.role': 'Full-Stack Intern',
  'exp.iti.type': 'Internship · Alexandria',
  'exp.iti.period': 'Nov 2023 – Apr 2024',
  'exp.iti.h1': 'Caregiver platform built with Angular and .NET in a cross-functional team setting.',

  'projects.eyebrow': 'Projects',
  'projects.title': 'Blue Sky & Sourcya delivery.',
  'projects.description':
    'Production work across Angular dashboards and React/Next.js bilingual products — not side demos.',
  'projects.filterAll': 'All',
  'projects.filterBlueSky': 'Blue Sky',
  'projects.filterSourcya': 'Sourcya',
  'projects.live': 'Live site',
  'projects.private': 'Private',
  'projects.companyBlueSky': 'Blue Sky',
  'projects.companySourcya': 'Sourcya',

  'skills.eyebrow': 'Skills',
  'skills.title': 'The stack I reach for.',
  'skills.description': 'TypeScript-first frontend work across Angular and React ecosystems.',
  'skills.core': 'Core',
  'skills.frameworks': 'Frameworks',
  'skills.focus': 'Focus',
  'skills.tools': 'Tools',

  'contact.eyebrow': 'Contact',
  'contact.title': 'Let’s build something precise.',
  'contact.description': 'Tell me about the product, the stack, and the kind of frontend care you need.',
  'contact.emailCta': 'Email Marwa',
  'contact.linkedin': 'LinkedIn',

  'footer.rights': 'All rights reserved.',
  'footer.tagline': 'Frontend Engineer · Angular · React · Next.js',
}

const ar: Dict = {
  'nav.about': 'نبذة',
  'nav.work': 'الخبرة',
  'nav.projects': 'المشاريع',
  'nav.skills': 'المهارات',
  'nav.contact': 'تواصل',
  'nav.hello': 'تواصلي معي',
  'nav.openMenu': 'فتح القائمة',
  'nav.closeMenu': 'إغلاق القائمة',
  'nav.themeToLight': 'الوضع الفاتح',
  'nav.themeToDark': 'الوضع الداكن',
  'nav.langToAr': 'العربية',
  'nav.langToEn': 'English',

  'hero.eyebrow': 'مهندسة واجهات أمامية · الإسكندرية، مصر',
  'hero.headline': 'واجهات بوضوح وإيقاع وعناية ثنائية اللغة.',
  'hero.summary':
    'أبني واجهات ويب إنتاجية بـ TypeScript عبر Angular وReact وNext.js — مع دعم RTL، وهندسة مكوّنات قابلة لإعادة الاستخدام، وتحويل دقيق من Figma إلى كود.',
  'hero.ctaProjects': 'عرض المشاريع',
  'hero.ctaContact': 'تواصلي معي',

  'about.eyebrow': 'نبذة',
  'about.title': 'أبني منتجات ويب بوضوح وعناية ودعم RTL.',
  'about.description':
    'من المواقع التسويقية إلى لوحات التحكم وتدفقات التبرع، أركز على واجهات قابلة للصيانة وتجربة مستخدم مدروسة.',
  'about.body':
    'مهندسة واجهات أمامية بخبرة أكثر من عامين في تسليم واجهات ويب إنتاجية بـ TypeScript عبر Angular وReact وNext.js. أتخصص في تجارب EN/AR مع RTL، وSSR وSEO، وأنظمة المكوّنات، والتحويل من Figma، وواجهات REST، وCore Web Vitals.',
  'about.extra':
    'أعمل من الإسكندرية، مصر، وأتعاون مع فرق المنتج والتصميم لتسليم تجارب ثنائية اللغة وتحسين الأداء وتحويل تصاميم Figma إلى مكوّنات قابلة لإعادة الاستخدام.',
  'about.education': 'التعليم',
  'about.school': 'جامعة الإسكندرية',
  'about.degree': 'بكالوريوس علوم الحاسب — صناعة البرمجيات والوسائط المتعددة · 2019–2023',

  'work.eyebrow': 'الخبرة',
  'work.title': 'أين حدث العمل.',
  'work.description': 'فرق منتجات ومستخدمون حقيقيون وواجهات كان يجب أن تصمد في الإنتاج.',

  'exp.sourcya.role': 'مهندسة واجهات أمامية',
  'exp.sourcya.type': 'دوام جزئي · عن بُعد',
  'exp.sourcya.period': 'مايو 2024 – الآن',
  'exp.sourcya.h1':
    'منتجات React وNext.js تشمل NGC وAltatawwar وTMT Cockpit/Eye وUmbrella CRM.',
  'exp.sourcya.h2': 'مواقع تسويقية ثنائية اللغة مع RTL وأداء عالٍ.',

  'exp.bluesky.role': 'مهندسة واجهات أمامية',
  'exp.bluesky.type': 'دوام كامل · الإسكندرية',
  'exp.bluesky.period': 'أغسطس 2024 – يونيو 2026',
  'exp.bluesky.h1': 'Africa Relief — تدفقات تبرع وتكامل Stripe وSSR للوصول وSEO.',
  'exp.bluesky.h2': 'Precision Platform — لوحة مالية بواجهات كثيفة وأنماط Angular قابلة لإعادة الاستخدام.',

  'exp.iti.role': 'متدربة Full-Stack',
  'exp.iti.type': 'تدريب · الإسكندرية',
  'exp.iti.period': 'نوفمبر 2023 – أبريل 2024',
  'exp.iti.h1': 'منصة Caregiver بـ Angular و.NET ضمن فريق متعدد التخصصات.',

  'projects.eyebrow': 'المشاريع',
  'projects.title': 'أعمال Blue Sky وSourcya.',
  'projects.description':
    'عمل إنتاجي عبر لوحات Angular ومنتجات React/Next.js ثنائية اللغة — وليس مشاريع جانبية.',
  'projects.filterAll': 'الكل',
  'projects.filterBlueSky': 'Blue Sky',
  'projects.filterSourcya': 'Sourcya',
  'projects.live': 'الموقع',
  'projects.private': 'خاص',
  'projects.companyBlueSky': 'Blue Sky',
  'projects.companySourcya': 'Sourcya',

  'skills.eyebrow': 'المهارات',
  'skills.title': 'المكدس الذي أعتمد عليه.',
  'skills.description': 'عمل واجهات TypeScript أولاً عبر منظومتي Angular وReact.',
  'skills.core': 'الأساسيات',
  'skills.frameworks': 'الأطر',
  'skills.focus': 'التركيز',
  'skills.tools': 'الأدوات',

  'contact.eyebrow': 'تواصل',
  'contact.title': 'لنبنِ شيئاً دقيقاً.',
  'contact.description': 'أخبرني عن المنتج والمكدس ونوع العناية التي تحتاجها الواجهة.',
  'contact.emailCta': 'راسل مروة',
  'contact.linkedin': 'لينكدإن',

  'footer.rights': 'جميع الحقوق محفوظة.',
  'footer.tagline': 'مهندسة واجهات أمامية · Angular · React · Next.js',
}

const dictionaries: Record<Locale, Dict> = { en, ar }

export function translate(locale: Locale, key: string): string {
  return dictionaries[locale][key] ?? dictionaries.en[key] ?? key
}

export const navKeys = [
  { href: '#about', key: 'nav.about' },
  { href: '#work', key: 'nav.work' },
  { href: '#projects', key: 'nav.projects' },
  { href: '#skills', key: 'nav.skills' },
  { href: '#contact', key: 'nav.contact' },
] as const
