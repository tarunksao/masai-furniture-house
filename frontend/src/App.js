
import './App.css';
import {Routes,Route} from "react-router-dom"
import { Box } from '@chakra-ui/react';
import Top from './Components/Top';
import AllRoutes_NS from './Niranjan/AllRoutes_NS';
import SinglePage from './Components/SinglePage';
import AdminRoutes from "./Pages/AdminRoutes";

function App() {
  return (
    <Box>
      {/* <Top />   */}
      {/* if you are not comment this you are not able to see checkout and cart page  */}
      <AllRoutes_NS />
      <AdminRoutes />
    </Box>
      //    <Routes>
      //   <Route to ="/top" element ={<Top/>}></Route>
      //   <Route path="/product/:id" element={<SinglePage/>} />
      // </Routes> 
  );
}

export default App;
