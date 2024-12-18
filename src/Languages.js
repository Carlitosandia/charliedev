import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // Permite cargar archivos de traducción
  .use(LanguageDetector) // Detecta idioma automáticamente
  .use(initReactI18next) // Pasar i18n a react-i18next
  .init({
    fallbackLng: 'en', // Idioma por defecto
    lng: 'en', // Idioma inicial (puede omitirse si usas detector)
    backend: {
      loadPath: `${import.meta.env.BASE_URL}/locales/{{lng}}/{{ns}}.json`, // Ruta de los archivos de traducción
    },
    ns: ['Header', 'Home', 'Projects', 'CareerPath', 'Contact' ,'Skills', 'ProgrammingLanguage','Cloud','Database','Framework','Style','Footer','Technology' ,'Commons'], // Nombres de namespaces (archivos)
    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },
  });

export default i18n;
