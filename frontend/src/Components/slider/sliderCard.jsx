import React from 'react';
import { useTranslation } from 'react-i18next';

const SliderCard = props => {
  const { card } = props;
  const { i18n } = useTranslation();

  return (
    <div className='col-12 col-lg-4 col-md-6'>
      <img src={card.imgURL} alt='' />
      <div
        className={`description-container ${
          card.description.bgColor ? card.description.bgColor : ''
        }`}
      >
        <div className='description-body'>
          <h3>{card.description.header}</h3>
          <p>{card.description.paragraph}</p>
        </div>
        <button className={card.arrowBtnColor ? card.arrowBtnColor : ''}>
          <i className={i18n.language==="en"?'fas fa-arrow-right':'fas fa-arrow-left'}></i>
        </button>
      </div>
    </div>
  );
};

export default SliderCard;
