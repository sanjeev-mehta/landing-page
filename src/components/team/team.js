import React, {useEffect, useState} from 'react';
import './team.css';
import LinkedInIcon from '../../assets/linkedin.png';
import sanjeev from '../../assets/sanjeev.jpg';
import gurmeet from '../../assets/gurmeet.png';
import rohit from '../../assets/rohit.jpg';
import jaspreet from '../../assets/jaspreet.jpg';
import harsimran from '../../assets/harsimran.jpg';
import upkar from '../../assets/Upkar.jpg';
import sanika from '../../assets/Sanika.jpg';

const teamMembers = [
    {
        name: 'Sanjeev Mehta',
        designation: 'iOS/Full Stack Developer',
        image: sanjeev,
        linkedin: 'https://www.linkedin.com/in/sanjeev-Mehta-ios',
        linkedinName: '/sanjeev-Mehta-ios'
    },
    {
        name: 'Gurmeet Singh',
        designation: 'iOS/Full Stack Developer',
        image: gurmeet,
        linkedin: 'https://www.linkedin.com/in/gurmeet--singh',
        linkedinName: '/gurmeet--singh'
    },{
        name: 'Rohit Verma',
        designation: 'iOS/Full Stack Developer',
        image: rohit,
        linkedin: 'https://www.linkedin.com/in/rohit0205',
        linkedinName: '/rohit0205'
    },{
        name: 'Jaspreet Singh',
        designation: 'UI/UX Designer',
        image: jaspreet,
        linkedin: 'https://www.linkedin.com/in/jaspreetdesign',
        linkedinName: '/jaspreetdesign'
    },{
        name: 'Harsimran Singh',
        designation: 'UI/UX Designer',
        image: harsimran,
        linkedin: 'https://www.linkedin.com/in/harsimransingharora',
        linkedinName: '/harsimransingharora'
    },{
        name: 'Upkar Singh',
        designation: 'UI/UX Designer',
        image: upkar,
        linkedin: 'https://www.linkedin.com/in/upkarsinghdesign',
        linkedinName: '/upkarsinghdesign'
    },{
        name: 'Sanika Coutinho',
        designation: 'UI/UX Designer',
        image: sanika,
        linkedin: 'https://www.linkedin.com/in//sanika-coutinho',
        linkedinName: '//sanika-coutinho'
    }
    
];

const TeamSection = () => {

    useEffect(() => {
        const handleScroll = () => {
            const items = document.querySelectorAll('.teamMember');
            const windowHeight = window.innerHeight;
            
            items.forEach((item) => {
                const itemTop = item.getBoundingClientRect().top;
                const isVisible = itemTop < windowHeight * 0.9;
                if (isVisible) {
                    item.classList.add('visible');
                } else {
                    item.classList.remove('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [angle, setAngle] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAngle((prevAngle) => (prevAngle + 1) % 360);
        }, 20);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="teamSection">
            <h2 className="teamTitle">Meet Our Team</h2>
            <p className="tagline">Innovative. Strategic. Passionate.</p>
            <div className="teamGrid">
                {teamMembers.map((member, index) => (
                      <div key={index} className='teamMember' style={{
                        '--border-angle': `${angle}deg`
                    }}>
                        <img src={member.image} alt={member.name} className="teamImage" />
                        <div className="teamName">{member.name}</div>
                        <div className="teamDesignation">{member.designation}</div>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedinLink">
                            <img src={LinkedInIcon} alt="LinkedIn" className="linkedinIcon" />
                            {member.linkedinName}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamSection;