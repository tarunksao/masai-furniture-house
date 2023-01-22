import React from 'react';
import { useTranslation } from 'react-i18next';

const LocationContainer = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className='location-container'>
        <i className='bi bi-shop'></i>
        <div className='location-text'>
          <small>{t('OpenHours')}</small>
          <strong>{t('SelectStore')}</strong>
        </div>
      </div>
    </>
  );
};

export default LocationContainer;
