import React from 'react';
import { useTranslation } from 'react-i18next';

const EmptyData = () => {
  const { t } = useTranslation();
    return (
        <div className='text-center py-5' id='noData'>
          <h4>{t('NoData')}</h4>
        </div>
    );
}

export default EmptyData;
