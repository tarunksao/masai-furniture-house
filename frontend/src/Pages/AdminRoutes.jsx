import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import AdminRegister from "./AdminDashboard/AdminRegister";
import AdminLogin from "./AdminLogin/AdminLogin";
import AdminProduct from "./AdminProduct/AdminProduct";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin/Login" element={<AdminLogin />}></Route>
      <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
      <Route path="/admin/register" element={<AdminRegister />}></Route>
      <Route path="/admin/products" element={<AdminProduct />}></Route>
    </Routes>
  );
};

export default AdminRoutes;
