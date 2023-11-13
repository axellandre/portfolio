// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/langs/en';
import fr from '../locales/langs/fr';

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
