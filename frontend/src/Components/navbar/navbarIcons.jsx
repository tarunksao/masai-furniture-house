import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const NavbarIcons = () => {
  const { cartProducts, favourits } = useSelector(state => state);

  return (
    <>
      <div className='navbar-icons'>
        <NavLink to='/profile'>
          <i className='bi bi-person'></i>
        </NavLink>
        <NavLink to='/favorite' style={{ position: 'relative' }}>
          <i className='bi bi-heart'></i>
          {favourits.favourits.length !== 0 && (
            <span className='badge-yellow'>{favourits.favourits.length}</span>
          )}
        </NavLink>
        <NavLink to='/shoppingcart' style={{ position: 'relative' }}>
          <i className='bi bi-minecart-loaded'></i>
          {cartProducts.cartProducts.length !== 0 && (
            <span className='badge-yellow'>
              {cartProducts.cartProducts.length}
            </span>
          )}
        </NavLink>
      </div>
    </>
  );
};

export default NavbarIcons;
