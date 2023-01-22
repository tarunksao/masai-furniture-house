import React from 'react';
import { Link } from 'react-router-dom';

const NavbarCollapse = () => {

  return (
    <>
      <Link to='/product/furniture'>Furniture</Link>
      <Link to='/product/storage'>Storage & Organization</Link>
      <Link to='/product/kitchen'>Kitchen & Appliances</Link>
    </>
  );
};

export default NavbarCollapse;
