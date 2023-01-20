import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
// import Home from "../Pages/Home";
import Checkout from "../Pages/Checkout";
export default function AllRoutes_NS() {
    return (
        <Routes>
            <Route path="/Cart" element={<Cart />}></Route>
            {/* <Route path="/" element={<Home />}></Route> */}
            <Route path="/Checkout" element={<Checkout />}></Route>
            
        </Routes>
    )
}
