import React from 'react';
import './tryAppSection.css';
import appStoreImage from '../../assets/App_Store.jpg';

const TryAppSection = () => {
    return (
        <div className="try-app-section">
            <div className='content'>
            <h1 className="title">Try it right now</h1>
            <p className="subtitle">
            Download Physiosync app available only on App Store and begin a personalized journey towards lasting results
            </p>
            <a href="https://apps.apple.com/app/idYOUR_APP_ID" target="_blank" rel="noopener noreferrer">
                <img src={appStoreImage} alt="Download on the App Store" className="download-image" />
            </a>
            </div>
            
        </div>
    );
};

export default TryAppSection;