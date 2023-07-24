export const ALL_LANGUAGES = {
  en: { name: 'English (UK)', nameShort: 'EN', locale: 'en-US' },
  pl: { name: 'Polski', nameShort: 'PL', locale: 'pl-PL' },
} as const;

export const LANGUAGE_KEY = 'lang';

export type LOCALE_KEY = keyof typeof ALL_LANGUAGES;
