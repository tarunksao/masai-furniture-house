import React from 'react';
import { useTranslation } from 'react-i18next';

const GoodToKnowCards = () => {
  const { t , i18n } = useTranslation();
  const images = i18n.language==="en"? [
    'https://www.ikea.com/images/94/81/94815dfb07c9d996f51d39745dbd301f.jpg?f=xxl',
    'https://www.ikea.com/images/shopping-at-ikea-1ed755468fb4ad3f3ec3e80fb0f0b21b.jpg?f=xxl',
    'https://www.ikea.com/images/click-and-collect-1dbf1423d471e925e3e7494d7b1ae578.jpg?f=xxl',
  ]:[
    'https://www.ikea.com/images/twsyl-mjany-f2f6503e579acecaf1c662b933f13f26.jpg?f=xs',
    'https://www.ikea.com/images/altswq-fy-aykya-eef37b5d79e7ed5b644b987bfcbfee26.jpg?f=xs',
    'https://www.ikea.com/images/altlb-walastlam-93e2f521d49b070f8c3f2f0c5274e52c.jpg?f=xs'
  ];

  return (
    <>
      <div className='mt-5'>
        <h2 className='h2-title mb-5'>{t('GoodToKnow')}</h2>
        <div className='row g-4'>
          {images.map(imageURL => (
            <div
              className='col-12 col-md-6 col-lg-4'
              key={images.indexOf(imageURL)}
            >
              <img className='w-100' src={imageURL} alt='' />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GoodToKnowCards;
