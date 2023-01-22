import React, { useEffect } from 'react';
import NavbarCollapse from './navbarCollapse';
// import NavbarSearch from './navbarSearch';
// import LocationContainer from './locationContainer';
import NavbarIcons from './navbarIcons';
import NavbarToggler from './navbarToggler';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCartItemsFromUser,
  getProductDataById,
  getFavItemsFromUser,
} from '../../services/firebase';
import { addToCart } from '../../store/actions/cartProducts';
// import { addToFav } from '../../store/actions/favourits';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { i18n } = useTranslation();

  const dispatch = useDispatch();

  // const cartItems = useSelector(state => state.cart.data);
  // // const favItems = useSelector(state => state.favourits.favourits);

  // const getItemsFromUser = (cb, items, addFn) => {
  //   cb(localStorage.getItem('UID')).then(productIDs => {
  //     // console.log(productIDs);

  //     productIDs &&
  //       productIDs.forEach(productID => {
  //         getProductDataById(productID).then(productData => {
  //           // if there are cart items that already exist in store don't dispatch again and just skip it
  //           if (!items.some(item => item.id === productID))
  //             // use this condition if the navbar will be rendered again, but as long as it is never rendered again this condition won't be needed
  //             dispatch(
  //               addFn({ id: productID, productData, PurchasedAmount: 1 })
  //             );
  //         });
  //       });
  //   });
  // };

  // useEffect(() => {
  //   // Handle Add toCart
  //   if (localStorage.getItem('UID')) {
  //     getItemsFromUser(getCartItemsFromUser, cartItems, addToCart);
  //     getItemsFromUser(getFavItemsFromUser, favItems, addToFav);
  //   }
  // }, []);

  return (
    <>
      <div
        className={`navbar ${
          i18n.dir() === 'ltr' ? 'navbar-ltr' : 'navbar-rtl'
        } navbar-expand-2xl pt-4 navbar-light`}
      >
        <NavLink to='/' className='navbar-brand'>
          <img
            className='logo'
            src='https://www.ikea.com/eg/en/static/ikea-logo.f7d9229f806b59ec64cb.svg'
            alt='logo'
          />
        </NavLink>

        <NavbarCollapse />

        {/* <NavbarSearch /> */}

        {/* <LocationContainer /> */}

        <NavbarIcons />

        <NavbarToggler />
      </div>
    </>
  );
};

export default Navbar;
