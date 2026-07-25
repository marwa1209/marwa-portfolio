import type { Locale, Theme } from '@/data/projects'

export const THEME_COOKIE = 'marwa-theme'
export const LOCALE_COOKIE = 'marwa-locale'

export function parseTheme(value?: string | null): Theme {
  return value === 'light' ? 'light' : 'dark'
}

export function parseLocale(value?: string | null): Locale {
  return value === 'ar' ? 'ar' : 'en'
}

export function setThemeCookie(theme: Theme) {
  document.cookie = `${THEME_COOKIE}=${theme};path=/;max-age=31536000;samesite=lax`
}

export function setLocaleCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=31536000;samesite=lax`
}

export const themeInitScript = `(function(){try{var t=localStorage.getItem('${THEME_COOKIE}');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t;var l=localStorage.getItem('${LOCALE_COOKIE}');if(l==='ar'){document.documentElement.lang='ar';document.documentElement.dir='rtl'}}catch(e){}})();`
