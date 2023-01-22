import React from 'react';
import FooterInfo from './footerInfo';
import FooterSocialLanguages from './footerSocialLanguages';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <footer
        className={`footer ${
          i18n.dir() === 'ltr' ? 'footer-ltr' : 'footer-rtl'
        } `}
      >
        <div className='row pb-5 mb-2'>
          <div className='col-3'>
            <ul>
              <li>
                <p>{t('UsefulLinks')}</p>
              </li>
              <li>
                <a href='#'>{t('CatalogueAndBrochures')}</a>
              </li>
              <li>
                <a href='#'>{t('IKEAShoppingApp')}</a>
              </li>
              <li>
                <a href='#'>{t('PlanningTools')}</a>
              </li>
              <li>
                <a href='#'>{t('IkeaStores')}</a>
              </li>
              <li>
                <a href='#'>{t('IkeaFood')}</a>
              </li>
              <li>
                <a href='#'>{t('IkeaFamily')}</a>
              </li>
            </ul>
          </div>
          <div className='col-3'>
            <ul>
              <li>
                <p>{t('CustomerService')}</p>
              </li>
              <li>
                <a href='#'>{t('AboutServices')}</a>
              </li>
              <li>
                <a href='#'>{t('AboutShopping')}</a>
              </li>
              <li>
                <a href='#'>{t('ReturnPolicy')}</a>
              </li>
              <li>
                <a href='#'>{t('ContactUs')}</a>
              </li>
              <li>
                <a href='#'>{t('FAQ')}</a>
              </li>
              <li>
                <a href='#'>{t('Feedback')}</a>
              </li>
            </ul>
          </div>
          <div className='col-3'>
            <ul>
              <li>
                <p>{t('ThisIkea')}</p>
              </li>
              <li>
                <a href='#'>{t('AboutIkea')}</a>
              </li>
              <li>
                <a href='#'>{t('DemocraticDesign')}</a>
              </li>
              <li>
                <a href='#'>{t('Sustainable')}</a>
              </li>
              <li>
                <a href='#'>{t('CommunityEngagement')}</a>
              </li>
              <li>
                <a href='#'>{t('WorkingAtIkea')}</a>
              </li>
            </ul>
          </div>
          <div className='col-3'>
            <ul>
              <li>
                <p>{t('GeneralInfo')}</p>
              </li>
              <li>
                <a href='#'>{t('NewsRoom')}</a>
              </li>
              <li>
                <a href='#'>{t('ProductRecalls')}</a>
              </li>
              <li>
                <a href='#'>{t('ProductGuides')}</a>
              </li>
            </ul>
          </div>
        </div>

        <FooterSocialLanguages />

        <FooterInfo />
      </footer>
    </>
  );
};

export default Footer;
