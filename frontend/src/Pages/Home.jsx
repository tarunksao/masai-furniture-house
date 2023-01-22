import React from 'react'
import Carousel from '../Components/carousel/carousel';
import ImageGallery from '../Components/imageGallery/imageGallery';
import SalesButtons from '../Components/salesButtons/salesButtons';
import Slider from '../Components/slider/slider';
import GoodToKnowCards from '../Components/goodToKnowCards/goodToKnowCards';
// import Navbar from '../Components/navbar/navbar';
import Footer from "../Components/footer/footer"
const Home = () => {
  return (
    <>
      <ImageGallery />

      <Carousel
        condition={{ property: 'SalePrice', operator: '>', value: 0 }}
      />

      <SalesButtons />

      <Slider />

      <Carousel
        condition={{ property: 'LowerPrice', operator: '==', value: true }}
      />

      <GoodToKnowCards />

      <Slider />
      <Footer/>
    </>
  );
};

export default Home;






// </>
//   )
// }

// export default Home
