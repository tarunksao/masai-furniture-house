import "./App.css";
import "./i18n/config"
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Top from "./Components/Top";
import AllRoutes_NS from "./Niranjan/AllRoutes_NS";
import SinglePage from "./Components/SinglePage";
import AdminRoutes from "./Pages/AdminRoutes";

import Home from "./Pages/Home"
import { useTranslation } from 'react-i18next';
import { updateUserStorageByID } from './services/firebase';

import Storage from './Components/Storage';
import Kitchen from './Components/Kitchen';
import Furniture from './Components/furniture';
import Single from './Components/Single';
import Cart from "./Niranjan/Cart";
import Checkout from "./Pages/Checkout";

function App() {
  const { i18n } = useTranslation();
  return (
    <>
      <Box dir={i18n.dir()} >


        <Routes className={`${i18n.dir() === 'ltr' ? 'body-container-ltr' : 'body-container-rtl'
          }`} >
          <Route path='/' element={<Home />}></Route>

          <Route path='/top' element={<Top />}></Route>

          <Route path="/product/:id" element={<SinglePage />} />
          <Route path="/product/storage" element={<Storage />} />
          <Route path="/product/kitchen" element={<Kitchen />} />
          <Route path="/product/furniture" element={<Furniture />} />
          <Route path="/furniture/Single/:id" element={<Single />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>


        {/* <AllRoutes_NS />
       <AdminRoutes /> */}
      </Box>
    </>
  );
}

export default App;
