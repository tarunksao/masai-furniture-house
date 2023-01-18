import './App.css';
import { Box, Heading } from '@chakra-ui/react';
import Top from './Components/Top';
import AllRoutes_NS from './Niranjan/AllRoutes_NS';
import { ProductPage } from './Components/Product';


function App() {
  return (
    <Box my={10} color='darkolivegreen'>
      <Heading textAlign='center'> MFH - Masai Furniture House</Heading>
      <Top/>
      <AllRoutes_NS/>   
    </Box>
  );
}

export default App;
