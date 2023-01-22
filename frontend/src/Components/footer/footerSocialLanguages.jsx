import React from 'react';
import LanguageSelector from './languageSelector';

const FooterSocialLanguages = () => {
  return (
    <>
      <div className='footer-social-languages d-flex justify-content-between pb-4 border-bottom'>
        <ul className='social-media-links d-flex'>
          <li>
            <a href='https://www.facebook.com/IkeaEgypt/'>
              <i className='fab fa-facebook'></i>
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/ikeaegypt/'>
              <i className='fab fa-instagram'></i>
            </a>
          </li>
          <li>
            <a href='https://www.youtube.com/user/IKEAegypt'>
              <i className='fab fa-youtube'></i>
            </a>
          </li>
        </ul>

        <LanguageSelector />
      </div>
    </>
  );
};

export default FooterSocialLanguages;
