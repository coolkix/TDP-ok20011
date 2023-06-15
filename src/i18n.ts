import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en.json'; // Import your English translations
import translationLV from './locales/lv.json'; // Import your French translations

// Configure i18n
i18n.use(initReactI18next).init({
  lng: 'en', // Set the default language
  fallbackLng: 'en', // Fallback language if translation is missing
  resources: {
    en: {
      translation: translationEN, // English translations
    },
    lv: {
      translation: translationLV, // Latvian translations
    },
  },
});

export default i18n;