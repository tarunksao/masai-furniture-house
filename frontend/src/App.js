import "./App.css";
import "./i18n/config"
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Top from "./Components/Top";
import SinglePage from "./Components/SinglePage";
import UserRegister from "./Pages/Authentication/Register";
import { UserLogin } from "./Pages/Authentication/Login";
import Logout from "./Pages/Authentication/Logout";
import Storage from "./Components/Storage";
import Kitchen from "./Components/Kitchen";
import Furniture from "./Components/furniture";
import Single from "./Components/Single";
import AdminLogin from "./Pages/AdminLogin/AdminLogin";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import AdminRegister from "./Pages/AdminDashboard/AdminRegister";
import AdminProduct from "./Pages/AdminProduct/AdminProduct";
import AdminUserSection from "./Pages/AdminUserSection/AdminUserSection";
import Home from "./Pages/Home"
import { useTranslation } from 'react-i18next';
import { updateUserStorageByID } from './services/firebase';
import Cart from "./Niranjan/Cart";
import Checkout from "./Pages/Checkout";
import Navbar from "./Components/Navbar";
import {ChakraProvider} from '@chakra-ui/react';


function App() {
  const { i18n } = useTranslation();
  return (
    <Box dir={i18n.dir()} >
      <ChakraProvider>
        <Navbar />
      </ChakraProvider>
       <Routes className={`${
          i18n.dir() === 'ltr' ? 'body-container-ltr' : 'body-container-rtl'
        }`} >
        <Route path='/' element={<Home/>}></Route>
        <Route path='/top' element={<ChakraProvider><Top/></ChakraProvider>}></Route>
        <Route path="/product/:id" element={<ChakraProvider><SinglePage/></ChakraProvider>} />
        <Route path='/register' element={<ChakraProvider><UserRegister /></ChakraProvider>}></Route>
        <Route path='/login' element={<ChakraProvider><UserLogin /></ChakraProvider>}></Route>
        <Route path='/logout' element={<ChakraProvider><Logout /></ChakraProvider>}></Route>
        <Route path="/product/storage" element={<ChakraProvider><Storage/></ChakraProvider>} />
        <Route path="/product/kitchen" element={<ChakraProvider><Kitchen/></ChakraProvider>} />
        <Route path="/product/furniture" element={<ChakraProvider><Furniture/></ChakraProvider>} />
        <Route path="/furniture/Single/:id" element={<ChakraProvider><Single/></ChakraProvider>} />
        <Route path="/cart" element={<ChakraProvider><Cart/></ChakraProvider>} />
        <Route path="/checkout" element={<ChakraProvider><Checkout/></ChakraProvider>} />
        <Route path="/admin/Login" element={<ChakraProvider><AdminLogin /></ChakraProvider>} />
        <Route path="/admin/dashboard" element={<ChakraProvider><AdminDashboard /></ChakraProvider>} />
        <Route path="/admin/register" element={<ChakraProvider><AdminRegister /></ChakraProvider>} />
        <Route path="/admin/products" element={<ChakraProvider><AdminProduct /></ChakraProvider>} />
        <Route path="/admin/allusers" element={<ChakraProvider><AdminUserSection /></ChakraProvider>} />
      </Routes>

    </Box>
  );
}

export default App;
