import { translations as enTranslations } from './en';
import { translations as arTranslations } from './ar';

export type Language = 'en' | 'ar';

const translations = {
  en: enTranslations,
  ar: arTranslations
} as const;

export function getTranslation(key: string, lang: Language = 'en'): string {
  const keys = key.split('.');
  let value: any = translations[lang];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Return the key if translation is not found
    }
  }

  return typeof value === 'string' ? value : key;
}

export function getAvailableLanguages(): Language[] {
  return Object.keys(translations) as Language[];
} 