import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const TextRightCard = ({ cat, type, name, id }) => {
  const { i18n } = useTranslation();
  return (
    <div>
      {/* <h4 className='head-title my-5' style={{ zIndex: 1 }}>
        {cat.data().Name}
      </h4> */}
      <Link
        className='row card row-card g-0'
        to={`/category/${type}/${name}/${id}/${cat.data().Name}/${cat.id}`}
        style={{ margin: '0', paddingTop: '6.5rem' }}
      >
        <img
          className='col-12 col-sm-6 col-md-8'
          src={cat.data().Image}
          alt='...'
        />
        <div className='col-12 col-sm-6 col-md-4 card-body card-right align-content-between'>
          <h4 className='card-text head-title'>
            {i18n.language === 'en' ? cat.data().Name : cat.data().NameAr}
          </h4>
          <button className='card-btn'>
            <i
              className={`${
                i18n.language === 'en'
                  ? 'bi bi-arrow-right'
                  : 'bi bi-arrow-left'
              }`}
            ></i>
          </button>
        </div>
      </Link>
    </div>
  );
};
export default TextRightCard;
