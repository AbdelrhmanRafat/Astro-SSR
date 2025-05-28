export const translations = {
  en: {
    nav: {
      home: 'Home',
      cart: 'Cart',
      signIn: 'Sign In',
      logout: 'Logout'
    },
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      success: 'Success'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      cart: 'السلة',
      signIn: 'تسجيل الدخول',
      logout: 'تسجيل الخروج'
    },
    common: {
      loading: 'جاري التحميل...',
      error: 'حدث خطأ',
      success: 'تم بنجاح'
    }
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
export type NestedTranslationKey = {
  [K in keyof typeof translations.en]: keyof typeof translations.en[K];
};

export function getTranslation(key: string, lang: Language = 'en'): string {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }
  
  return value;
} 