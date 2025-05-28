export const translations = {
  nav: {
    home: 'الرئيسية',
    cart: 'السلة',
    signIn: 'تسجيل الدخول',
    logout: 'تسجيل الخروج'
  },
  lang: {
    en: 'الإنجليزية',
    ar: 'العربية'
  }
} as const;

export type TranslationKey = keyof typeof translations;
export type TranslationValue = typeof translations[TranslationKey]; 