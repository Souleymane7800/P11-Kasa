// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../../styles/components/navbar.scss';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
      return (
            <nav className='navbar'>
                  <ul>
                        <NavLink to='/'>
                              <li>Accueil</li>
                        </NavLink>
                        <NavLink to='/about'>
                              <li>A Propos</li>
                        </NavLink>
                  </ul>
            </nav>
      );
}
