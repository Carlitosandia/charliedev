import React from 'react';
import { useTranslation } from 'react-i18next';

import Styles from '../styles/LanguageToggle.module.css';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  
  // Cambiar el idioma al alternar el slider
  const toggleLanguage = (event) => {
    const newLanguage = event.target.checked ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className={Styles.togglecontainer}>
      <span className={Styles.languagelabel}>EN</span>
      <label className={Styles.togglelabel}>
      <input
          type="checkbox"
          onChange={toggleLanguage}
          className={Styles.toggleinput}
        />
        <span className={Styles.toggleslider}></span>
      </label>
      <span className={Styles.languagelabel}>ES</span>
    </div>
  );
};


export default LanguageToggle;
