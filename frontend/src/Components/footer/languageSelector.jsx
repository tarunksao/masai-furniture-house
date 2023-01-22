import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { t , i18n } = useTranslation();
  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("language",i18n.language);
  }
  return (
    <>
      <div className='language-selector d-flex align-items-center'>
        <div className='country-selector p-2'>
          <a href='#' className='country-btn d-flex align-items-center'>
            <i className='bi bi-globe'></i>
            <p className='px-2 m-0'>{t('ChangeCountry')}</p>
          </a>
        </div>
        <div className='language-switch'>
          <select name='language-switch' id='language-switch' className='p-2'  onChange={changeLanguage} defaultValue={i18n.language}>
            <option value='en'>English</option>
            <option value='ar'>العربية</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default LanguageSelector;
