import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'Marwa Mahmoud',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#080b14',
    theme_color: '#080b14',
    lang: 'en',
    dir: 'ltr',
    categories: ['portfolio', 'business'],
    icons: [
      {
        src: '/profile.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  }
}
