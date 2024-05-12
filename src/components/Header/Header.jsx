// eslint-disable-next-line no-unused-vars
import React from 'react';
import Logo from '../../assets/logo.png';
import '../../styles/components/header.scss';
import Navbar from '../Navbar/Navbar';

export default function Header() {
      return (
            <div className='header'>
                  <div>
                        <img className='logo' src={Logo} alt='logo kasa' />
                  </div>
                  <Navbar />
            </div>
      );
}
