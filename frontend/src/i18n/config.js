import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: localStorage.getItem("language")?localStorage.getItem("language"):'en',
  lng: localStorage.getItem("language")?localStorage.getItem("language"):'en',
  resources: {
    en: {
      translations: require('./locales/en/translations.json')
    },
    ar: {
      translations: require('./locales/ar/translations.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'ar'];

export default i18n;
