import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

const NavbarCollapse = () => {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <>
      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav mb-2 mb-lg-0'>
          <li className='nav-item'>
            <p
              className='nav-link active'
              data-bs-toggle='offcanvas'
              data-bs-target='#offcanvasExample'
            >
              {t('Products')}
            </p>
          </li>
          <li className='nav-item'>
            <p
              className='nav-link'
              data-bs-toggle='offcanvas'
              data-bs-target='#offcanvasExample'
            >
              {t('Rooms')}
            </p>
          </li>
          <li
            className='nav-item'
            onClick={() => {
              history.push('/offers/sale');
            }}
          >
            <p className='nav-link'>{t('Offers')}</p>
          </li>
          <li
            className='nav-item'
            onClick={() => {
              history.push('/whatsnew/newArrival');
            }}
          >
            <p className='nav-link'>{t('WhatNew')}</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarCollapse;
