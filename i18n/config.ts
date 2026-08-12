export const locales = ['en', 'lo', 'th', 'zh', 'vi'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'lo';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  lo: 'ລາວ',
  th: 'ไทย',
  zh: '中文',
  vi: 'Tiếng Việt',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  lo: '🇱🇦',
  th: '🇹🇭',
  zh: '🇨🇳',
  vi: '🇻🇳',
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
