import React, { useEffect } from 'react';
import styles from './middleSection.css';
import Img1 from '../../assets/1.png';
import Img2 from '../../assets/2.png'
import Img3 from '../../assets/3.png'
import Img4 from '../../assets/4.png'
import Img5 from '../../assets/5.png'
import Img6 from '../../assets/6.png'

const images = [
    Img1,
    Img2,
    Img5,
    Img6,
    Img4,
    Img3,
];

const MiddleSection = () => {

    useEffect(() => {
        const handleScroll = () => {
            const isMobile = window.matchMedia("(max-width: 768px)").matches;
            const items = document.querySelectorAll(`${".gridItem"}`);
            const windowHeight = window.innerHeight;

            if (!isMobile) {
                items.forEach((item, index) => {
                        item.classList.add("visible");
                });
                return;
            } 
            
            items.forEach((item, index) => {
                const itemTop = item.getBoundingClientRect().top;
                const isVisible = itemTop < windowHeight * 0.9;
                if (isVisible) {
                    item.classList.add("visible");
                } else {
                    item.classList.remove('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }, []);

    return (
        <div className={styles.section}>
            <h2 className="title">Why You Should Use PhysioSync</h2>
            <div className={styles.gridContainer}>
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`${"gridItem"} ${index % 2 === 0 ? "slideLeft" : "slideRight"}`}
                    >
                       <img src={src} alt={'PhyioSync Features'} className={`${"gridImg"}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MiddleSection;