import "./App.css";
import "./i18n/config"
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Top from "./Components/Top";
import AllRoutes_NS from "./Niranjan/AllRoutes_NS";
import SinglePage from "./Components/SinglePage";
import UserRegister from "./Pages/Authentication/Register";
import { UserLogin } from "./Pages/Authentication/Login";
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

function App() {
  const { i18n } = useTranslation();
  return (
    <Box dir={i18n.dir()} >
       <Routes className={`${
          i18n.dir() === 'ltr' ? 'body-container-ltr' : 'body-container-rtl'
        }`} >
        <Route path='/' element={<Home/>}></Route>
        <Route path='/' element={<Top/>}></Route>
        <Route path="/product/:id" element={<SinglePage/>} />
        <Route path='/register' element={<UserRegister />}></Route>
        <Route path='/login' element={<UserLogin />}></Route>
        <Route path="/product/storage" element={<Storage/>} />
        <Route path="/product/kitchen" element={<Kitchen/>} />
        <Route path="/product/furniture" element={<Furniture/>} />
        <Route path="/furniture/Single/:id" element={<Single/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/admin/Login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/admin/products" element={<AdminProduct />} />
        <Route path="/admin/allusers" element={<AdminUserSection />} />
      </Routes>

    </Box>
  );
}

export default App;
