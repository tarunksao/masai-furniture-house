import React from 'react';

const ImageColumn = props => {
  const { imageCol } = props;

  return (
    <>
      <div className='image-column col-6 col-lg-3'>
        {imageCol.map(image => {
          return (
            <img
              key={image.id}
              className={`${image.size}-img`}
              src={image.imageURL}
              alt='sale'
            />
          );
        })}
      </div>
    </>
  );
};

export default ImageColumn;
