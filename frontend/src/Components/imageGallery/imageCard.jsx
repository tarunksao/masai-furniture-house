import React from 'react';

const ImageCard = props => {
  const { imageURL } = props;

  return (
    <>
      <div className='col-12 col-lg-6'>
        <img src={imageURL} alt='sale' />
      </div>
    </>
  );
};

export default ImageCard;
