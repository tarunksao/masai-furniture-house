import React from 'react';

const SalesButtons = () => {
  const salesBtns = [
    {
      imgURL:
        'https://www.ikea.com/images/19/38/19385db4e05919d70f0b4c2f94907b3d.jpg?f=l',
      imgAlt: 'Furniture sale',
    },
    {
      imgURL:
        'https://www.ikea.com/images/db/c3/dbc35f1f06fc08923f78ceb23acc365a.jpg?f=l',
      imgAlt: 'Accessories sale',
    },
  ];

  return (
    <div className='sales-buttons d-flex justify-content-between border-bottom pb-5'>
      {salesBtns.map(btn => {
        return (
          <img
            key={salesBtns.indexOf(btn)}
            src={btn.imgURL}
            alt={btn.imgAlt}
            className='w-49'
          />
        );
      })}
    </div>
  );
};

export default SalesButtons;
