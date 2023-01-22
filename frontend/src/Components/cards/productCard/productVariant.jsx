import React from 'react';

const ProductVariant = ({product,chooseVariant,viewedId}) => {
  const{Images,Color}=product.data();
  return (
    <a className={`variant-container ${product.id==viewedId&&'selectedV'}` }onClick={chooseVariant}>
      <img
        className='variant-img'
        src={Images[0]}
        alt={Color}
      />
    </a>
  );
};

export default ProductVariant;
