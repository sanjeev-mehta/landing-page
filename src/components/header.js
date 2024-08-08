import React, { useState } from 'react';
import './header.css';
import Logo from '../assets/Logo.jpg';
import menubar from '../assets/menu.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo */}
        <img src={Logo} alt="Logo" className="logo" />

        {/* Burger Menu */}
        <button className="menu-button" onClick={toggleMenu}>
          <img src={menubar} alt="Menu" className="menu-icon" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleMenu}>
          &times;
        </button>
        <ul className="menu-items">
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#features" onClick={toggleMenu}>Features</a></li>
          <li><a href="#team" onClick={toggleMenu}>Team</a></li>
          <li><a href="#proposal" onClick={toggleMenu}>Proposal</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;