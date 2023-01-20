import React from 'react'
import { Box, Heading } from '@chakra-ui/react';
import Carousel from '../Components/carousel/carousel';
import ImageGallery from '../components/imageGallery/imageGallery';
import SalesButtons from '../components/salesButtons/salesButtons';
// import Slider from '../components/slider/slider';
// import GoodToKnowCards from '../components/goodToKnowCards/goodToKnowCards';
const Home = () => {
  return (
    <>
    <Box my={20} color='darkolivegreen'>
      <Heading textAlign='center'> MFH - Masai Furniture House</Heading>
    </Box>
   
      <ImageGallery />

      <Carousel
        condition={{ property: 'SalePrice', operator: '>', value: 0 }}
      />

      <SalesButtons />

      {/* <Slider /> */}

      <Carousel
        condition={{ property: 'LowerPrice', operator: '==', value: true }}
      />

      {/* <GoodToKnowCards /> */}

      {/* <Slider /> */}
    </>
  );
};

export default Home;






// </>
//   )
// }

// export default Home
