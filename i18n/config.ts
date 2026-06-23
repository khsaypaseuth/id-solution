export const locales = ['en', 'lo', 'th', 'zh'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  lo: 'ລາວ',
  th: 'ไทย',
  zh: '中文',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  lo: '🇱🇦',
  th: '🇹🇭',
  zh: '🇨🇳',
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
