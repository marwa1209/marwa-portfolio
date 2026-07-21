export type Locale = 'en' | 'ar'
export type Theme = 'dark' | 'light'
export type CompanyFilter = 'all' | 'blue-sky' | 'sourcya'

export type Project = {
  id: string
  company: 'blue-sky' | 'sourcya'
  name: Record<Locale, string>
  description: Record<Locale, string>
  stack: string[]
  live?: string | null
}

export const companyProjects: Project[] = [
  {
    id: 'africa-relief',
    company: 'blue-sky',
    name: { en: 'Africa Relief', ar: 'أفريكا ريليف' },
    description: {
      en: 'Humanitarian donations platform with Stripe payment UI, SSR SEO, analytics, and responsive campaign flows.',
      ar: 'منصة تبرعات إنسانية بواجهة دفع Stripe، وتحسين محركات البحث عبر SSR، والتحليلات، وتدفقات حملات متجاوبة.',
    },
    stack: ['Angular', 'SSR', 'Tailwind', 'Stripe', 'RxJS'],
    live: null,
  },
  {
    id: 'precision-platform',
    company: 'blue-sky',
    name: { en: 'Precision Platform', ar: 'بريسيجن بلاتفورم' },
    description: {
      en: 'Enterprise finance admin dashboard with multi-role access, charts, document viewing, and dense PrimeNG workflows.',
      ar: 'لوحة إدارة مالية للمؤسسات مع صلاحيات متعددة، ورسوم بيانية، وعرض مستندات، وواجهات PrimeNG غنية.',
    },
    stack: ['Angular 20', 'PrimeNG', 'Tailwind v4', 'Chart.js', 'SSR'],
    live: null,
  },
  {
    id: 'ngc-website',
    company: 'sourcya',
    name: { en: 'NGC Website', ar: 'موقع NGC' },
    description: {
      en: 'Corporate bilingual marketing site with leadership pages, motion polish, and Figma-accurate Next.js delivery.',
      ar: 'موقع تسويقي ثنائي اللغة للشركات مع صفحات القيادة، وحركة مدروسة، وتنفيذ Next.js مطابق لـ Figma.',
    },
    stack: ['Next.js', 'React', 'next-intl', 'Framer Motion', 'Tailwind'],
    live: 'https://ngco.com.sa/',
  },
  {
    id: 'tmt-cockpit',
    company: 'sourcya',
    name: { en: 'TMT Cockpit', ar: 'TMT Cockpit' },
    description: {
      en: 'Operations cockpit with dense workflows, form-heavy screens, and Capacitor packaging for mobile shells.',
      ar: 'منصة تشغيل بواجهات كثيفة ونماذج متقدمة وتغليف Capacitor لتطبيقات الجوال.',
    },
    stack: ['React', 'Vite', 'MUI', 'Radix', 'Capacitor'],
    live: 'https://staging.cockpit.tmtx.io/',
  },
  {
    id: 'tmt-eye',
    company: 'sourcya',
    name: { en: 'TMT Eye', ar: 'TMT Eye' },
    description: {
      en: 'Authenticated Next.js product surface with rich editing, notifications, and database-backed flows.',
      ar: 'منتج Next.js بمصادقة وتحرير غني وإشعارات وتدفقات مرتبطة بقاعدة البيانات.',
    },
    stack: ['Next.js', 'NextAuth', 'Prisma', 'Editor.js', 'Firebase'],
    live: 'https://staging.eye.tmtx.io/',
  },
  {
    id: 'tmt-x',
    company: 'sourcya',
    name: { en: 'TMT X', ar: 'TMT X' },
    description: {
      en: 'Product marketing site in the Sorcya design-system family with i18n and lead-capture patterns.',
      ar: 'موقع تسويقي للمنتج ضمن عائلة نظام تصميم سورسيا مع ترجمة وأنماط جذب العملاء.',
    },
    stack: ['Next.js', 'React', 'Tailwind', 'i18n', 'Framer Motion'],
    live: 'https://tmtx.io',
  },
  {
    id: 'rehla',
    company: 'sourcya',
    name: { en: 'Rehla', ar: 'رحلة' },
    description: {
      en: 'Travel-related product site with bilingual UX, marketing sections, and shared Sorcya UI patterns.',
      ar: 'موقع منتج سفر بتجربة ثنائية اللغة وأقسام تسويقية وأنماط واجهة مشتركة من سورسيا.',
    },
    stack: ['Next.js', 'React', 'Tailwind', 'i18n', 'Framer Motion'],
    live: 'https://rehla.io',
  },
  {
    id: 'ujrah',
    company: 'sourcya',
    name: { en: 'Ujrah', ar: 'أجرة' },
    description: {
      en: 'Fintech-style marketing experience with advanced motion, forms validation, and bilingual routing.',
      ar: 'تجربة تسويقية بطابع تقني مالي مع حركة متقدمة وتحقق نماذج وتوجيه ثنائي اللغة.',
    },
    stack: ['Next.js', 'GSAP', 'Framer Motion', 'TanStack Query', 'Zod'],
    live: 'https://ujrah.io',
  },
  {
    id: 'madain',
    company: 'sourcya',
    name: { en: 'Madain', ar: 'مدائن' },
    description: {
      en: 'Bilingual landing product with forms, phone helpers, and query-driven UI sections.',
      ar: 'منتج صفحات هبوط ثنائي اللغة مع نماذج ومساعدات الهاتف وواجهات مدفوعة بالاستعلام.',
    },
    stack: ['Next.js', 'i18next', 'TanStack Query', 'Framer Motion', 'Zod'],
    live: 'https://madain.io',
  },
  {
    id: 'asasy',
    company: 'sourcya',
    name: { en: 'Asasy', ar: 'أساسي' },
    description: {
      en: 'Product marketing platform with bilingual content, animations, and shared component system.',
      ar: 'منصة تسويق منتج بمحتوى ثنائي اللغة وحركة ونظام مكوّنات مشترك.',
    },
    stack: ['Next.js', 'React', 'i18next', 'Framer Motion', 'TanStack Query'],
    live: 'https://asasy.io',
  },
  {
    id: 'amenaa',
    company: 'sourcya',
    name: { en: 'Amenaa', ar: 'أمينة' },
    description: {
      en: 'Marketing site with theming, bilingual content, and polished section composition.',
      ar: 'موقع تسويقي مع ثيمات ومحتوى ثنائي اللغة وتركيب أقسام أنيق.',
    },
    stack: ['Next.js', 'Tailwind v4', 'i18next', 'TanStack Query', 'Framer Motion'],
    live: 'https://amenaa-io.vercel.app/',
  },
  {
    id: 'kold-x',
    company: 'sourcya',
    name: { en: 'Kold-X', ar: 'Kold-X' },
    description: {
      en: 'Motion-heavy bilingual landing with Lottie, Swiper, and a modern Tailwind stack.',
      ar: 'صفحة هبوط ثنائية اللغة غنية بالحركة مع Lottie وSwiper ومكدس Tailwind حديث.',
    },
    stack: ['Next.js', 'Tailwind v4', 'i18next', 'Lottie', 'Swiper'],
    live: 'https://staging.koldx.io/',
  },
  {
    id: 'nasni',
    company: 'sourcya',
    name: { en: 'Nasni Landing', ar: 'صفحة نصني' },
    description: {
      en: 'Lead-generation landing with forms, state management, and bilingual conversion flow.',
      ar: 'صفحة هبوط لجذب العملاء مع نماذج وإدارة حالة وتدفق تحويل ثنائي اللغة.',
    },
    stack: ['Next.js', 'Zustand', 'Zod', 'React Hook Form', 'i18next'],
    live: 'https://staging.nasni.io/',
  },
  {
    id: 'altatawwar',
    company: 'sourcya',
    name: { en: 'Altatawwar', ar: 'التطور' },
    description: {
      en: 'Corporate content site with maps, analytics, content-driven pages, and bilingual UX.',
      ar: 'موقع محتوى شركات مع خرائط وتحليلات وصفحات مبنية على المحتوى وتجربة ثنائية اللغة.',
    },
    stack: ['Next.js', 'Contentlayer', 'i18next', 'Leaflet', 'Framer Motion'],
    live: 'https://altatawwar.com',
  },
  {
    id: 'nuvax',
    company: 'sourcya',
    name: { en: 'Nuvax', ar: 'نوفاكس' },
    description: {
      en: 'Brand/content site with MDX publishing pipeline, SEO pages, and advanced motion.',
      ar: 'موقع علامة ومحتوى مع مسار نشر MDX وصفحات SEO وحركة متقدمة.',
    },
    stack: ['Next.js', 'next-intl', 'MDX', 'GSAP', 'Framer Motion'],
    live: 'https://nuvax-se.vercel.app/en',
  },
]
