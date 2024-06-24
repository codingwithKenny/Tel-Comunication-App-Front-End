import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import translationEN from './Locale/en/translation.json';
import translationES from './Locale/es/translation.json';
import translationFR from './Locale/fr/translation.json';
// import translationDE from './locales/de/translation.json';
// import translationIT from './locales/it/translation.json';
// import translationZH from './locales/zh/translation.json';
// import translationJA from './locales/ja/translation.json';
// import translationRU from './locales/ru/translation.json';
// import translationPT from './locales/pt/translation.json';
// import translationAR from './locales/ar/translation.json';
// ... import more languages here

// The translations
const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
  fr: {
    translation: translationFR,
  },
//   de: {
//     translation: translationDE,
//   },
//   it: {
//     translation: translationIT,
//   },
//   zh: {
//     translation: translationZH,
//   },
//   ja: {
//     translation: translationJA,
//   },
//   ru: {
//     translation: translationRU,
//   },
//   pt: {
//     translation: translationPT,
//   },
//   ar: {
//     translation: translationAR,
//   },
  // ... add more languages here
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;