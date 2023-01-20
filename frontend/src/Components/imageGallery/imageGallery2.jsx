import React from 'react';
import ImageCard from './imageCard';
import ImageColumn from './imageColumn';

const ImageGallery2 = () => {
  const images = [
    'https://www.ikea.com/ext/ingkadam/m/37ba9b3082f51730/original/PH180658.jpg?f=xxxl',
    [
      {
        id: 11,
        imageURL:
          'https://www.ikea.com/ext/ingkadam/m/6fe00db2519c240f/original/PH180057.jpg?f=xs',
        size: 'short',
      },

      {
        id: 22,
        imageURL:
          'https://www.ikea.com/ext/ingkadam/m/1a58fe57019783c0/original/PH171011.jpg?f=xs',
        size: 'long',
      },
    ],
    [
      {
        id: 33,
        imageURL:
          'https://www.ikea.com/images/65/38/65383e77617de45341e1e27b2c38ad67.jpg?f=xs',
        size: 'long',
      },

      {
        id: 44,
        imageURL:
          'https://www.ikea.com/images/45/d9/45d9cfbab2bad50883e69eaf6e9e7bfa.jpg?f=xs',
        size: 'short',
      },
    ],
  ];

  return (
    <div className='border-top mt-nav pt-nav pb-5'>
      <div className='image-gallery row g-4'>
        {images.map(imageCol => {
          return (
            <React.Fragment key={images.indexOf(imageCol)}>
              {images.indexOf(imageCol) === 0 ? (
                <ImageCard imageURL={imageCol} key={images.indexOf(imageCol)} />
              ) : (
                <ImageColumn
                  imageCol={imageCol}
                  key={images.indexOf(imageCol)}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery2;
