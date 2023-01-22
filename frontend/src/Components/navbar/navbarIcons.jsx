import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const NavbarIcons = () => {
  const { isAuth, userData } = useSelector(state => state.auth);
  console.log(userData);
  return (
    <>
      <div className='navbar-icons'>
        {!isAuth? (<>
          <button type="button" class="btn btn-outline-secondary">
            <NavLink to='/register' >Sign Up</NavLink>
        </button>
          <button type="button" class="btn btn-outline-secondary">
            <NavLink to='/login' >Login</NavLink>
        </button>
        </>):(<>
        <button type="button" class="btn btn-outline-secondary">
          <NavLink to='/logout' >Logout</NavLink>
        </button>
        </>)}
        {/* <NavLink to='/register'>
          <i className='bi bi-person'></i>
        </NavLink> */}
        <NavLink to='/cart'>
          <i className='bi bi-cart'></i>
        </NavLink>
        {/* <NavLink to='/favorite' style={{ position: 'relative' }}>
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
        </NavLink> */}
      </div>
    </>
  );
};

export default NavbarIcons;
