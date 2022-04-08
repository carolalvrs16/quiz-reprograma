import { initReactI18next } from 'react-i18next';

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: [],

    load: 'languageOnly',

    debug: false,

    preload: ['pt', 'en'],

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    defaultNS: 'components',

    fallbackLng: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
