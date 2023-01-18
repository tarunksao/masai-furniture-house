import { Link, NavLink } from "react-router-dom";


export default function Navbar() {
  let activeStyle = 
   { color: 'white',
    background: 'orange',
    fontWeight: "bold",
    fontSize:"20px",
    width:"200px",paddingTop:"10px",
    textDecorationLine:"none",
    textAlign:"center",
    cursor:"pointer"
}
  
  let normalStyle = { color: 'white',
  background: '#FF5C35',
  fontWeight: "bold",
  width:"200px",
  paddingTop:"10px",
  borderRadius:"10px",
  textAlign:"center",
  textDecorationLine:"none"} 
  return (
    <div style={{ display: "flex", gap: "1rem", justifyContent: "space-around",marginTop:"20px",height:"100px",paddingTop:"25px",boxShadow: '1px 2px 9px #F4AAB9',position:"sticky",top:"0",backgroundColor:"black",paddingBottom:"20px"}}>
        
      <NavLink
        style={({ isActive }) => (isActive ?activeStyle :normalStyle )}
        to="/Cart"
        end
      >
        Cart
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ?activeStyle :normalStyle )}
        to="/"
        end
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ?activeStyle :normalStyle )}
        to="/Checkout"
        end
      >
        Checkout
      </NavLink>
      
      </div>
  );
}