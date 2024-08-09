import React from 'react';
import './footer.css'; // Import a CSS file for styling
import logo from '../../assets/Logo.jpg'
const Footer = () => {
  const handleButtonClick = () => {
    window.open('https://testflight.apple.com/join/T3PNU5bm', '_blank');
  };
  return (
    <div>
    <footer className="footer">
      <div className="footer-content">
        {/* Logo */}
        <div className="footer-logo">
          <img src={logo} alt="PhysioSync Logo" />
        </div>

        {/* Navigation Buttons */}
        <div className="footer-buttons">
          <button className="footer-btn"> <a href="#hero-section">Home</a></button>
          <button className="footer-btn"> <a href="#features">Features </a></button>
          <button className="footer-btn"><a href="#teamSection" >Team </a></button>
          
        </div>
        <div>
            
        </div>
        <button className='download-btn' onClick={handleButtonClick}>Download App</button>

        {/* Copyright Text */}
        
      </div>
      
    </footer>
    <div className="footer-copyright">
    <p>Copyright © PhysioSync 2024</p>
  </div>
  </div>
  );
};

export default Footer;
