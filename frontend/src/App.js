import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Top from "./Components/Top";
import AllRoutes_NS from "./Niranjan/AllRoutes_NS";
import SinglePage from "./Components/SinglePage";
import Storage from "./Components/Storage";
import Kitchen from "./Components/Kitchen";
import Furniture from "./Components/furniture";
import Single from "./Components/Single";
import AdminLogin from "./Pages/AdminLogin/AdminLogin";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import AdminRegister from "./Pages/AdminDashboard/AdminRegister";
import AdminProduct from "./Pages/AdminProduct/AdminProduct";
import AdminUserSection from "./Pages/AdminUserSection/AdminUserSection";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Top />}></Route>
      <Route path="/product/:id" element={<SinglePage />} />
      <Route path="/product/storage" element={<Storage />} />
      <Route path="/product/kitchen" element={<Kitchen />} />
      <Route path="/product/furniture" element={<Furniture />} />
      <Route path="/furniture/Single/:id" element={<Single />} />
      <Route path="/admin/Login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/register" element={<AdminRegister />} />
      <Route path="/admin/products" element={<AdminProduct />} />
      <Route path="/admin/allusers" element={<AdminUserSection />} />
    </Routes>
  );
}

export default App;
