import React from 'react';

const NavbarToggler = () => {
  return (
    <>
      <button
        className='navbar-toggler toggler'
        id='button'
        data-bs-toggle='offcanvas'
        data-bs-target='#offcanvasExample'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
    </>
  );
};

export default NavbarToggler;
