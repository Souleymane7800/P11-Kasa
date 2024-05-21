// eslint-disable-next-line no-unused-vars
import React from 'react';
import Logo from '../../assets/logo.png';
import '../../styles/components/header.scss';
import Navbar from '../Navbar/Navbar';
import { NavLink } from 'react-router-dom';

export default function Header() {
      return (
            <header className='header'>
                  <NavLink to='/'>
                        <div className='logo'>
                              <img src={Logo} alt='logo kasa' />
                        </div>
                  </NavLink>
                  <Navbar />
            </header>
      );
}
