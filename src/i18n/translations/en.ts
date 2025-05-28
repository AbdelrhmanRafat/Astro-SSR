export const translations = {
  nav: {
    home: 'Home',
    cart: 'Cart',
    signIn: 'Sign In',
    logout: 'Logout'
  },
  lang: {
    en: 'English',
    ar: 'Arabic'
  }
} as const;

export type TranslationKey = keyof typeof translations;
export type TranslationValue = typeof translations[TranslationKey]; 