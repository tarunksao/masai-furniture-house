import React from 'react';
import { useTranslation } from 'react-i18next';

const FooterInfo = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className='footer-info d-flex justify-content-between pb-3 pt-3 mt-4'>
        <div className='copyright mb-2'>
          <p>&copy; Inter IKEA Systems B.V 1999-2021</p>
        </div>
        <div className='legal-links'>
          <ul className='d-flex'>
            <li>
              <a href='#'>{t('PrivacyPolicy')}</a>
            </li>
            <li>
              <a href='#'>{t('CookiePolicy')}</a>
            </li>
            <li>
              <a href='#'>{t('TermsConditions')}</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FooterInfo;
