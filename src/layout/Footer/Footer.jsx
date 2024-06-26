// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../../styles/layout/footer.scss';
import footer from '../../assets/logo_footer.png';

export default function Footer() {
      return (
            <div>
                  <div className='footer'>
                        <div className='footer__logo'>
                              <img src={footer} alt='logo footer' />
                        </div>
                        <p className='footer__text'>
                              © 2020 Kasa. All rights reserved
                        </p>
                  </div>
            </div>
      );
}
