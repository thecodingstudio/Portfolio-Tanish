import React from 'react';

import './Services.css';

import Aos from 'aos';

import "aos/dist/aos.css";

import { useEffect } from 'react';

const Services = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);

    return (
        <div className='services-main'>
            <div className='services'>
                <div data-aos="fade-right" className='ser-title'>
                    <div className='ser-inner'>
                        <span className='text'>
                            WHAT I DO
                        </span>
                        <span className='line'>
                        </span>
                    </div>
                    <h2 className='services-name'>
                        My Services
                    </h2>
                </div>
                <div className='services-body'>
                    <div data-aos="fade-up" className="one">
                        <div className="menu-icon">
                            <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1655288178/t6_gznyyl.webp" className="image-explore" alt="icon" />
                        </div>
                        <div className="menu-title">
                            React Native UI/UX Design
                        </div>
                        <div className="menu-desc">
                            I work with certain design tools to create high-fidelity designs and prototypes. I design accessible and usable products which aid business growth.
                        </div>
                        <div className='bottem-line'>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100" className="one">
                        <div className="menu-iconn">
                            <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1655288156/t5_i6j5kr.webp" className="image-explore" alt="icon" />
                        </div>
                        <div className="menu-title">
                            React Native App Development
                        </div>
                        <div className="menu-desc">
                            I use various technologies to develop React Native Android Apps,React Native iPhone Apps,React Native Cross-Platform Apps,Building Web and Mobile Apps.
                        </div>
                        <div className='bottem-linee'>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200" className="one">
                        <div className="menu-icono">
                            <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1655288108/t4_vmrj44.webp" className="image-explore" alt="icon" />
                        </div>
                        <div className="menu-title">
                            Plugin And API Integration
                        </div>
                        <div className="menu-desc">
                            I’m familiar with Custom Plugin Development,Third-Party API Integration, Social media & Payment Integration.
                        </div>
                        <div className='bottem-linen'>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Services;
