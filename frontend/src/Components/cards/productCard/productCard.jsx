import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFav, removeFromFav } from '../../../store/actions/favourits';
import ProductPrice from './productPrice';
import ProductVariant from './productVariant';
import { addToCart } from './../../../store/actions/cartProducts';
import {
  addCartItemToUser,
  getCollection,
  addFavItemsToUser,
} from '../../../services/firebase';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProductCard = ({ showOptions, pId, productData, roomBtn, baseUrl }) => {
  const { favourits } = useSelector(state => state.favourits);
  const { cartProducts } = useSelector(state => state.cartProducts);
  const { t, i18n } = useTranslation();

  let found = favourits?.find(i => i.id === pId);
  let foundInCart = cartProducts?.find(i => i.id === pId);

  const [isFavourite, setIsFavourite] = useState(found ? true : false);
  const [inCart, setInCart] = useState(foundInCart ? true : false);
  const [isHovering, setIsHovering] = useState(false);
  const [variants, setVariants] = useState(null);
  const [viewedProduct, setViewedProduct] = useState({ pId, productData });
  const {
    Name,
    NameAr,
    ProductName,
    Price,
    SalePrice,
    Width,
    Length,
    Images,
    Height,
    Quantity,
  } = viewedProduct.productData;

  const dispatch = useDispatch();
  const toggleFavourite = () => {
    dispatch(
      isFavourite ? removeFromFav(pId) : addToFav({ id: pId, productData })
    );

    addFavItemsToUser(localStorage.getItem('UID'), pId);
    setIsFavourite(!isFavourite);

    // let productData2 = productData;
    // productData2.ProductName = 'SAGSTUA';
    // productData2.Name = 'Classic bed';
    // productData2.Color = 'white';
    // productData2.Price = 3500;
    // productData2.Images =['https://www.ikea.com/eg/en/images/products/sagstua-bed-frame-white-luroey__0662176_pe719097_s5.jpg?f=s','https://www.ikea.com/eg/en/images/products/sagstua-bed-frame-white-luroey__0861810_pe713114_s5.jpg?f=s']

    // addData(productData2);
  };

  const addCart = () => {
    dispatch(addToCart({ id: pId, productData, PurchasedAmount: 1 }));
    setInCart(true);

    addCartItemToUser(localStorage.getItem('UID'), pId);
  };

  const getVariants = () => {
    getCollection('Products', ['ProductName', '==', ProductName])
      .then(res => {
        setVariants(res);
      })
      .catch(err => console.log('error :', err));
  };

  useEffect(() => {
    showOptions && getVariants();
  }, []);

  return (
    <>
      <div className='col-6 col-md-4 col-lg-3 prod-container'>
        <header
          className='d-flex align-items-center justify-content-between'
          style={{ padding: '.625rem' }}
        >
          <button onClick={toggleFavourite}>
            <i className={isFavourite ? 'fas fa-heart' : 'far fa-heart'}></i>
          </button>
        </header>

        <div className='mt-1 position-relative'>
          <Link
            className='card category-card col-12 '
            to={{
              // pathname: '/products/' + viewedProduct.pId,
              pathname: baseUrl
                ? `${baseUrl}/${Name}/${viewedProduct.pId}`
                : '/products/' + viewedProduct.pId,
              state: {
                prod: {
                  id: viewedProduct.pId,
                  productData: viewedProduct.productData,
                },
              },
            }}
          >
            <img
              src={
                roomBtn
                  ? Images[isHovering ? 0 : 1]
                  : Images[isHovering ? 1 : 0]
              }
              className='card-img-top'
              alt={i18n.language === 'en' ? Name : NameAr}
              onMouseOver={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            />
          </Link>
          {/*TODO: if created recently  */}
          <strong className='new'>{t('New')}</strong>
          {SalePrice && (
            <p className='product-highlight'>{t('LimitedOffer')}</p>
          )}
          {/* <p>{Material}</p> */}
          <p className='product-header'>{ProductName}</p>
          <p className='product-description'>
            {i18n.language === 'en' ? Name : NameAr}
          </p>

          {/*TODO: add feature field in db*/}
          <p>
            {Width &&
              `${Width} ${
                Length ? '*' + Length : Height ? '*' + Height : ''
              }  ${t('cm')}`}
          </p>
          <ProductPrice Price={Price} SalePrice={SalePrice} />

          {!showOptions && !inCart && (
            <p className='more-options'>{t('MoreOptions')}</p>
          )}
          {!inCart && Quantity !== 0 && (
            <button
              className={`${
                i18n.language === 'en' ? 'card-icon-ltr' : 'card-icon-rtl'
              }`}
              onClick={addCart}
            >
              <i className='fas fa-cart-plus'></i>
            </button>
          )}
        </div>

        {variants?.length>1 && (
          <div className='row mt-3'>
            <small className='col-12'>{t('MoreVariants')}</small>

            {variants.map(item => (
              <ProductVariant
                key={item.id}
                product={item}
                viewedId={viewedProduct.pId}
                chooseVariant={() =>
                  setViewedProduct({ pId: item.id, productData: item.data() })
                }
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductCard;
