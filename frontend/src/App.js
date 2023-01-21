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
function App() {
  const { i18n } = useTranslation();
  return (
    <Box dir={i18n.dir()} >
       <Routes className={`${
          i18n.dir() === 'ltr' ? 'body-container-ltr' : 'body-container-rtl'
        }`} >
        <Route path='/' element={<Home/>}></Route>
        <Route path="/product/:id" element={<SinglePage/>} />
      </Routes>
      {/* if you are not comment this you are not able to see checkout and cart page  */}
      <AllRoutes_NS />
       <AdminRoutes />
     </Box>
  );
}

export default App;
