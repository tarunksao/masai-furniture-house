import './App.css';
import {Routes,Route} from "react-router-dom"
import { Box } from '@chakra-ui/react';
import Top from './Components/Top';
import AllRoutes_NS from './Niranjan/AllRoutes_NS';
import SinglePage from './Components/SinglePage';


function App() {
  return (
    <Box>
      <Top/>
      <AllRoutes_NS/>   
    </Box>
      //    <Routes>
      //   <Route to ="/top" element ={<Top/>}></Route>
      //   <Route path="/product/:id" element={<SinglePage/>} />
      // </Routes> 
  );
}

export default App;
