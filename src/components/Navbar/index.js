import React from 'react';

import logo from '../../assets/images/logo.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='container-fluid'>
        <a className='Navbar__brand' href='/'>
          <img className='Navbar__brand-logo' src={logo} alt='Logo'></img>
          <span className='font-weight-light '>Platzi</span>
          <span className='font-weight-bold'>Conf</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
