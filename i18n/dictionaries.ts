import 'server-only';
import type { Locale } from './config';
import en from './dictionaries/en.json';
import lo from './dictionaries/lo.json';
import th from './dictionaries/th.json';
import zh from './dictionaries/zh.json';
import vi from './dictionaries/vi.json';

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = {
  en: en as Dictionary,
  lo: lo as Dictionary,
  th: th as Dictionary,
  zh: zh as Dictionary,
  vi: vi as Dictionary,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
