import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCareerPath from './assets/locales/en/CareerPath.json';
import enCloud from './assets/locales/en/Cloud.json';
import enCommons from './assets/locales/en/Commons.json';
import enDatabase from './assets/locales/en/Database.json';
import enFooter from './assets/locales/en/Footer.json';
import enFramework from './assets/locales/en/Framework.json';
import enHeader from './assets/locales/en/Header.json';
import enHome from './assets/locales/en/Home.json';
import enProgrammingLanguage from './assets/locales/en/ProgrammingLanguage.json';
import enProjects from './assets/locales/en/Projects.json';
import enSkills from './assets/locales/en/Skills.json';
import enStyle from './assets/locales/en/Style.json';
import enTechnology from './assets/locales/en/Technology.json';

import esCareerPath from './assets/locales/es/CareerPath.json';
import esCloud from './assets/locales/es/Cloud.json';
import esCommons from './assets/locales/es/Commons.json';
import esDatabase from './assets/locales/es/Database.json';
import esFooter from './assets/locales/es/Footer.json';
import esFramework from './assets/locales/es/Framework.json';
import esHeader from './assets/locales/es/Header.json';
import esHome from './assets/locales/es/Home.json';
import esProgrammingLanguage from './assets/locales/es/ProgrammingLanguage.json';
import esProjects from './assets/locales/es/Projects.json';
import esSkills from './assets/locales/es/Skills.json';
import esStyle from './assets/locales/es/Style.json';
import esTechnology from './assets/locales/es/Technology.json';

i18n
  .use(LanguageDetector) // Detecta idioma automáticamente
  .use(initReactI18next) // Pasar i18n a react-i18next
  .init({
    fallbackLng: 'en', // Idioma por defecto
    lng: 'en', // Idioma inicial (puede omitirse si usas detector)
    resources:{
      en:{
        CareerPath: enCareerPath,
        Cloud: enCloud,
        Commons: enCommons,
        Database: enDatabase,
        Footer: enFooter,
        Framework: enFramework,
        Header: enHeader,
        Home: enHome,
        ProgrammingLanguage: enProgrammingLanguage,
        Projects: enProjects,
        Skills: enSkills,
        Style: enStyle,
        Technology: enTechnology
      },
      es:{
        CareerPath: esCareerPath,
        Cloud: esCloud,
        Commons: esCommons,
        Database: esDatabase,
        Footer: esFooter,
        Framework: esFramework,
        Header: esHeader,
        Home: esHome,
        ProgrammingLanguage: esProgrammingLanguage,
        Projects: esProjects,
        Skills: esSkills,
        Style: esStyle,
        Technology: esTechnology
      }
    },
    ns: ['Header', 'Home', 'Projects', 'CareerPath', 'Contact' ,'Skills', 'ProgrammingLanguage','Cloud','Database','Framework','Style','Footer','Technology' ,'Commons'], // Nombres de namespaces (archivos)
    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },
  });

export default i18n;
