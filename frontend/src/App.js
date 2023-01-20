
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
       <Routes>
        <Route path='/' element={<Top/>}></Route>
        <Route path="/product/:id" element={<SinglePage/>} />
      </Routes>
      <AllRoutes_NS />
       <AdminRoutes />
     </Box>
  );
}

export default App;
