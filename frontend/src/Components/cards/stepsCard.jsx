import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const StepsCard = () => {
  const { t } = useTranslation();
  var stepsArr = [
    {
      id: 1,
      stepName: t('Assembly'),
      stepDescription: t('AssemblyDesc'),
      stepSVG:
        'M14 6H5v3h9V6zM3 4v7h3.983l-2.3093 4H3v6h11v-6h-3.5445l2.3094-4H16V9h2V8h3V6h-3V5h-2V4H3zm7.4555 7-2.3094 4H6.983l2.3094-4h1.163zM5 17h7v2H5v-2z',
    },
    {
      id: 2,
      stepName: t('ClickAndCollect'),
      stepDescription: t('ClickAndCollectDesc'),
      stepSVG:
        'M21 4H1v16h15V10H6v8H3V6h16v7.1707c-1.1652.4118-2 1.5231-2 2.8293v3c0 1.6569 1.3431 3 3 3s3-1.3431 3-3v-3c0-1.3062-.8348-2.4175-2-2.8293V4zM8 18h2v-6H8v6zm6 0h-2v-6h2v6zm5-2c0-.5523.4477-1 1-1s1 .4477 1 1v3c0 .5523-.4477 1-1 1s-1-.4477-1-1v-3z',
    },
    {
      id: 3,
      stepName: t('BuyBack'),
      stepDescription: t('BuyBackDesc'),
      stepSVG:
        'm9 4 3 3V5.0054c3.866 0 7 3.134 7 7 0 .9088-.1732 1.7773-.4884 2.574l1.5104 1.5104c.6253-1.2258.978-2.6139.978-4.0844 0-4.9706-4.0294-9-9-9V1L9 4zM7.0191 7.087C5.7707 8.3512 5 10.0883 5 12.0054c0 .9089.1732 1.7773.4885 2.5741L3.978 16.0898C3.3527 14.864 3 13.4759 3 12.0054c0-2.4694.9945-4.7065 2.6049-6.3327L7.019 7.087z',
    },
    {
      id: 4,
      stepName: t('PaymentOption'),
      stepDescription: t('PaymentOptionDesc'),
      stepSVG:
        'M5 5C3.3432 5 2 6.3431 2 8v8c0 1.6569 1.3432 3 3 3h14c1.6569 0 3-1.3431 3-3V8c0-1.6569-1.3431-3-3-3H5zM4 8c0-.5523.4477-1 1-1h14c.5523 0 1 .4477 1 1v1H4V8zm0 4v4c0 .5523.4477 1 1 1h14c.5523 0 1-.4477 1-1v-4H4z',
    },
  ];  
  return (
    <div className='row g-1 mt-5'>
      {stepsArr.map((step) => {
        return (
          <div className='card step-card col-md-6 col-lg-3' key={step.id}>
            <div className='card-body step-body'>
              <svg
                focusable='false'
                className='pub__svg-icon pub__call-out__icon'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d={step.stepSVG}
                ></path>
              </svg>
              <h5 className='step-title'>{step.stepName}</h5>
              <p>{step.stepDescription}</p>
              <Link className='step-link' to='/'>
              {t('LearnMore')}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default StepsCard;
