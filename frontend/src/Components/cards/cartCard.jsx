import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  getDocumentByID,
  removeCartItemFromUser,
} from '../../services/firebase';
import {
  removeFromCart,
  setCartItemAmount,
} from '../../store/actions/cartProducts';
import { useTranslation } from 'react-i18next';

const CartCard = props => {
  const { t, i18n } = useTranslation();
  const [selectedAmount, setSelectedAmount] = useState(props.purchasedQuantity);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const deleteItem = () => {
    dispatch(removeFromCart(props.id));
    dispatch(setCartItemAmount(props.id, 0));

    removeCartItemFromUser(localStorage.getItem('UID'), props.id);
  };

  const selectAmount = event => {
    setSelectedAmount(Number(event.target.value));
  };

  useEffect(() => {
    dispatch(
      setCartItemAmount({ id: props.id, PurchasedAmount: selectedAmount })
    );
  }, [dispatch, props.id, selectedAmount]);

  useEffect(() => {
    getDocumentByID('Products', props.id).then(res => {
      setProduct(res);
    });
  }, []);
  return (
    <>
      <div className='shop-section'>
        <div className='shopping-list'>
          <div className='shop-icon'>
            <button className='prod-box' onClick={() => deleteItem()}>
              <i className='fas fa-trash-alt'></i>
            </button>

            <div className='prod-box'>
              <select defaultValue={selectedAmount} onChange={selectAmount}>
                {(() => {
                  const options = [];
                  for (let i = 0; i < product.Quantity; i++) {
                    options.push(<option key={i + 1}>{i + 1}</option>);
                  }
                  return options;
                })()}
              </select>
            </div>
          </div>

          <div className='shopping-details'>
            <div className='shopping-img'>
              <img src={props.product.Images[0]} alt={props.product.Name} />
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
                {t('EGP')}{' '}
                {props.product.SalePrice
                  ? props.product.SalePrice
                  : props.product.Price}
              </h6>
              <p className='txt-info'>
                {i18n.language == 'en'
                  ? props.product.Material
                  : props.product.MaterialAr}
                , {props.product.Length}
                {t('cm')} * {props.product.Width}
                {t('cm')}
              </p>
              <span>
                {t('SubTotal')}:{' '}
                <strong>
                  {t('EGP')}{' '}
                  {(props.product.SalePrice
                    ? props.product.SalePrice
                    : props.product.Price) * selectedAmount}
                </strong>
              </span>
              {props.product.SalePrice && (
                <p className='text-danger'>
                  {t('SaleSubTotal')}:{' '}
                  <strong>
                    {t('EGP')} {props.product.Price * selectedAmount}
                  </strong>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartCard;
