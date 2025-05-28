import en from './ui/en.json';
import ar from './ui/ar.json';

export const languages = {
  en: 'English',
  ar: 'العربية'
} as const;

export type Language = keyof typeof languages;
export const defaultLang: Language = 'en';

export const ui = {
  en,
  ar,
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: string) {
  const validLang = (lang in ui ? lang : defaultLang) as Language;
  
  return function t(key: string) {
    const keys = key.split('.');
    let value: any = ui[validLang];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return value;
  };
} 