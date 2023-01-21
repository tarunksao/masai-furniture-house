import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../assets/scss/pages/_favourite.scss';
import { removeFromFav, setFavItemAmount } from '../../store/actions/favourits';
import {
  addCartItemToUser,
  removeFavItemFromUser,
} from '../../services/firebase';
import { useTranslation } from 'react-i18next';
import { addToCart } from '../../store/actions/cartProducts';

const FavouriteCard = props => {
  const { t, i18n } = useTranslation();
  const [selectedAmount, setSelectedAmount] = useState(1);

  const { cartProducts } = useSelector(state => state.cartProducts);
  let foundInCart = cartProducts?.find(i => i.id === props.id);
  const [inCart, setInCart] = useState(foundInCart ? true : false);

  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(removeFromFav(props.id));
    dispatch(setFavItemAmount(props.id, 0));

    removeFavItemFromUser(localStorage.getItem('UID'), props.id);
  };

  const selectAmount = event => {
    setSelectedAmount(Number(event.target.value));
  };

  const addCart = () => {
    dispatch(
      addToCart({
        id: props.id,
        productData: props.product,
        PurchasedAmount: selectedAmount,
      })
    );
    setInCart(true);

    addCartItemToUser(localStorage.getItem('UID'), props.id);
  };

  useEffect(() => {
    dispatch(
      setFavItemAmount({ id: props.id, PurchasedAmount: selectedAmount })
    );
  }, [dispatch, props.id, selectedAmount]);

  return (
    <>
      <div className='shop-section'>
        <div className='shopping-list'>
          <div className='shop-icon'>
            <button className='prod-box' onClick={() => deleteItem()}>
              <i className='fas fa-trash-alt'></i>
            </button>

            {props.product.Quantity !== 0 && (
              <div className='prod-box'>
                <select defaultValue={selectedAmount} onChange={selectAmount}>
                  {(() => {
                    const options = [];
                    for (let i = 0; i < props.product.Quantity; i++) {
                      options.push(<option key={i + 1}>{i + 1}</option>);
                    }
                    return options;
                  })()}
                </select>
              </div>
            )}
          </div>

          <div className='shopping-details'>
            <div className='shopping-img'>
              <img src={props.product.Images[0]} alt='...' />
            </div>

            <div className='shopping-info'>
              <h6>
                {i18n.language == 'en'
                  ? props.product.Name
                  : props.product.NameAr}
              </h6>
              <p>
                {i18n.language == 'en'
                  ? props.product.Description
                  : props.product.DescriptionAr}
              </p>
              <h6>
                {t('EGP')} {props.product.Price}
              </h6>
              <p className='txt-info'>
                {i18n.language == 'en'
                  ? props.product.Material
                  : props.product.MaterialAr}
                , {props.product.Width}
                {t('cm')} * {props.product.Length}
                {t('cm')}
              </p>
              {/* <!-- button For Shopping --> */}
              <div className='prod-box col-5'>
                {props.product.Quantity !== 0 && (
                  <button
                    className={`btn card-button ${inCart && 'disabled'}`}
                    onClick={addCart}
                  >
                    <i className='fas fa-shopping-bag'></i>{' '}
                    {!inCart ? t('AddToCart') : t('Added')}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FavouriteCard;
