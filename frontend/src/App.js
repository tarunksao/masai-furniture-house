import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Top from "./Components/Top";
import AllRoutes_NS from "./Niranjan/AllRoutes_NS";
import SinglePage from "./Components/SinglePage";
import AdminRoutes from "./Pages/AdminRoutes";
import Storage from './Components/Storage';
import Kitchen from './Components/Kitchen';
import Furniture from './Components/furniture';
import Single from './Components/Single';
function App() {
  return (
       <Routes>
        <Route path='/' element={<Top/>}></Route>
        <Route path="/product/:id" element={<SinglePage/>} />
        <Route path="/product/storage" element={<Storage/>} />
        <Route path="/product/kitchen" element={<Kitchen/>} />
        <Route path="/product/furniture" element={<Furniture/>} />
        <Route path="/furniture/Single/:id" element={<Single/>} />
      </Routes>

    <Box>
      {/* if you are not comment this you are not able to see checkout and cart page  */}
      {/* <AllRoutes_NS /> */}
      <AdminRoutes />
    </Box>
  );
}

export default App;
