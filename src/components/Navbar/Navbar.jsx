// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../../styles/components/navbar.scss';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
      return (
            <nav className='navbar'>
                  <ul>
                        <li>
                              <NavLink to="/" activeclassname="active">Accueil</NavLink>
                        </li>
                        <li>
                              <NavLink to="/about"  activeclassname="active">A Propos</NavLink>
                        </li>
                  </ul>
            </nav>
      );
}
