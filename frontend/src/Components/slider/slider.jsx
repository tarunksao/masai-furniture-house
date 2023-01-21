import React from 'react';
import SliderCard from './sliderCard';
import { useTranslation } from 'react-i18next';

const Slider = () => {
  const { t , i18n } = useTranslation();

  const cards = i18n.language==="en"?[
    {
      imgURL:
        'https://www.ikea.com/images/8b/c2/8bc2422a4ebdce5aff5c06a62378ddcf.jpg?f=xxl',
      description: {
        header: 'Free delivery to your doorstep across Egypt',
        paragraph:
          'On accessories purchases over 250 EGP and up to 20kgs per order',
      },
    },
    {
      imgURL:
        'https://www.ikea.com/images/cc/3e/cc3ef4f1303f68e5f50b04b7bfd9a9a7.jpg?f=xxl',
      description: {
        bgColor: 'blue-bg',
        header: 'IKEA limited collections',
        paragraph: 'Discover the newest IKEA limited collections',
      },
    },
    {
      imgURL:
        'https://www.ikea.com/images/07/e0/07e00f22872a77d736c904c5caaea2b5.jpg?f=xxl',
      description: {
        bgColor: 'red-bg',
        header: 'New lower price',
        paragraph: 'Same great quality, with new lower prices',
      },
      arrowBtnColor: 'white',
    },
    {
      imgURL:
        'https://www.ikea.com/images/a4/ee/a4ee716a4420ea28293982ff54374c30.jpg?f=xs',
      description: {
        bgColor:'brown-bg',
        header: 'Gift ideas',
        paragraph: 'The IKEA range has affordable gifts for all occasions',
      },
    }
    ,
    {
      imgURL:
        'https://www.ikea.com/images/b2/c0/b2c0c304d16024f26b1c93c622127492.jpg?f=xxl',
      description: {
        bgColor: 'dark-orange-bg',
        header: 'Discover our new products',
        paragraph:
          'The new products are convenient and give your home a fresh new look.',
      },
      arrowBtnColor: 'white',
    },
    {
      imgURL:
        'https://www.ikea.com/images/b0/17/b0172bdf63e54fddd7dd24183fac5ab6.jpg?f=xs',
      description: {
        bgColor: 'dark-green-bg',
        header: 'HEMBJUDEN collection',
        paragraph:'Designed to inspire your late-night dinner hosting and renew your home decoration for the festive season. '
      },
      arrowBtnColor: 'white',
    },
    {
      imgURL:
        'https://www.ikea.com/images/4b/ba/4bba30083ec926e6d879473e6aceba87.jpg?f=xs',
      description: {
        bgColor: 'dark-blue-bg',
        header: 'IKEA Family offers',
        paragraph:'Discover our exclusive offers for IKEA Family members'
      },
      arrowBtnColor: 'white',
    },
  ]:[
    {
      imgURL:
        'https://www.ikea.com/images/af/26/af268c42c4bd4b2aa5e5a41617c3d2cf.jpg?f=xs',
      description: {
        header: 'توصيل مجاني حتى باب المنزل لجميع أنحاء مصر',
        paragraph:
          'لمشتريات الاكسسوارات بأكثر من 250 جنيه وحتى 20 كجم لكل طلب',
      },
    },
    {
      imgURL:
        'https://www.ikea.com/images/cc/3e/cc3ef4f1303f68e5f50b04b7bfd9a9a7.jpg?f=xxl',
      description: {
        bgColor: 'blue-bg',
        header: 'مجموعات ايكيا المحدودة',
        paragraph: 'اكتشف أحدث مجموعات ايكيا المحدودة',
      },
    },
    {
      imgURL:
        'https://www.ikea.com/images/92/86/9286c9e7faa6ff00e4b63dcef8458be8.jpg?f=xs',
      description: {
        bgColor: 'red-bg',
        header: 'سعر منخفض جديد',
        paragraph: 'نفس الجودة الرائعة، بأسعار منخفضة جديدة',
      },
      arrowBtnColor: 'white',
    },
    {
      imgURL:
        'https://www.ikea.com/images/a4/ee/a4ee716a4420ea28293982ff54374c30.jpg?f=xs',
      description: {
        bgColor:'brown-bg',
        header: 'أفكار للهدايا',
        paragraph: 'هدايا فريدة وبأسعار مناسبة سوف تضع بلا شك البسمة على وجوههم',
      },
    },
    {
      imgURL:
        'https://www.ikea.com/images/4b/5d/4b5d4de6fd5d0d32b56d33c261c0ab32.jpg?f=xs',
      description: {
        bgColor: 'dark-orange-bg',
        header: 'اكتشف منتجاتنا الجديدة',
        paragraph:
          'المنتجات الجديدة مريحة وتضفي على منزلك مظهرًا جديدًا.',
      },
      arrowBtnColor: 'white',
    },
    {
      imgURL:
        'https://www.ikea.com/images/b0/17/b0172bdf63e54fddd7dd24183fac5ab6.jpg?f=xs',
      description: {
        bgColor: 'dark-green-bg',
        header: 'مجموعة HEMBJUDEN',
        paragraph:'مصممة لإضاقة الإلهام في أوقات العشاء المتأخر في الليل وتجديد ديكور منزلك لموسم الأعياد.'
      },
      arrowBtnColor: 'white',
    },
    {
      imgURL:
        'https://www.ikea.com/images/04/b1/04b14fd850a83eff82694d1f3df71812.jpg?f=xs',
      description: {
        bgColor: 'dark-blue-bg',
        header: 'عروض عائلة ايكيا',
        paragraph:'تسوق العروض الحصرية لأعضاء عائلة ايكيا'
      },
      arrowBtnColor: 'white',
    },
  ];

  return (
    <div className='teaser border-top pt-2 pb-5 mb-5'>
      <h2 className='h2-title'>{t('NowInIkea')}</h2>
      <div className='carousel-body'>
        <div className='row flex-nowrap'>
          {cards.map(card => (
            <SliderCard card={card} key={cards.indexOf(card)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
