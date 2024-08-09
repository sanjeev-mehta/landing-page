import React, {useState, useEffect} from 'react';
import './heroSection.css';
import ButtonImage1 from '../../assets/appStore.png'; 
import ButtonImage2 from '../../assets/projectProposal.png'; 
import HeroImage from '../../assets/Mockups.png';

function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const heroSection = document.querySelector('.hero-content');
          if (heroSection.getBoundingClientRect().top < window.innerHeight) {
            setIsVisible(true);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        handleScroll(); 
    
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const handleButtonClick = () => {
        window.open('https://testflight.apple.com/join/T3PNU5bm', '_blank');
      };
      
  return (
    <section className="hero-section" id='hero-section'>
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <h1 className="hero-heading">Revolutionizing Your <br /> Physiotherapy Journey</h1>
        <p className="hero-subheadline">Make your Physiotherapy experience seamless and simplified with PhysioSync</p>
        <div className="hero-buttons">
          <button className="hero-button" onClick={handleButtonClick}>

          
            <img src={ButtonImage1} alt="Button 1" />
           
          </button>
          <button className="hero-button">
            <img src={ButtonImage2} alt="Button 2" />
          </button>
        </div>
        <img src={HeroImage} alt="Hero" className='hero-img' />
      </div>
    </section>
  );
}

export default HeroSection;