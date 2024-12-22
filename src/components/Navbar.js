import React, { useState, useEffect,useContext } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ThemeContext } from '../ThemeContext';
    

function Navbar() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext); 
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navbarStyle = {
    backgroundColor: isDarkMode ? '#333' : '#fff',
    color: isDarkMode ? '#fff' : '#000',
  };
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            IronyMan
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Anemia_detector'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Anemia detector
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Generic_medicine_finder'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Generic medicine finder
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Generic_Store_locator'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Generic Store locator
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          <button onClick={toggleTheme} className="theme-toggle-btn">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;