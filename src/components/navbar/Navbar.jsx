import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              Trés Belle
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link
                  to='/aboutUs'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  About us
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/treatments'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Treatments
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/booking'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Booking
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;
