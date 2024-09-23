import { Link } from 'react-router-dom';
import whatsappLogo from '../assets/logos/ri_whatsapp-fill.png'
import callLogo from '../assets/logos/call.png'
import instagramLogo from '../assets/logos/Instagram - Negative.png'
import React from 'react';

const whatsApp = 'https://wa.link/0zpjwq'

const Footer = () => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='flex items-center justify-center'>
            <div className='p-4 md:flex md:w-[700px] lgr:w-[1000px] flex-row justify-between'>
                <div className='flex flex-col items-center md:items-start'>
                    <img src="../src/assets/images/logo.svg" alt="logo" />
                    <p className='w-[200px] text-center md:text-left text-gray-500 mt-2'>
                        Contact us today to make your sweetest dreams a reality.
                    </p>
                    <Link to={whatsApp}>
                        <div className='flex flex-row w-[90px] justify-between items-center mt-3'>
                            <img src={callLogo} className='w-5' alt="call" />
                            <img src={whatsappLogo} className='w-5' alt="whatsapp" />
                            <img src={instagramLogo} className='w-5' alt="instagram" />
                        </div>
                    </Link>
                </div>

                <div className='md:flex flex-col hidden'>
                    <h1 className='text-[#3B82F6] text-2xl mb-3 hover:text-purple-500'>About us</h1> 
                    <div className='text-gray-500 mb-2 cursor-pointer' onClick={() => scrollToSection('gallery')}>
                        Gallery
                    </div>
                    <div className='text-gray-500 mb-2 cursor-pointer hover:text-purple-500' onClick={() => scrollToSection('testimonials')}>
                        Testimonials
                    </div>
                    <div className='text-gray-500 mb-2 cursor-pointer' onClick={() => scrollToSection('contact')}>
                        Contact
                    </div>
                </div>

                <div className='md:flex hidden flex-col'>
                    <h1 className='text-[#3B82F6] text-2xl mb-3'>Our Contact</h1> 
                    <div className='text-gray-500 mb-2'>Line A, Ebonyi State, Nigeria</div>
                    <div className='text-gray-500 mb-2'>+234-8105722281</div>
                    <div className='text-gray-500 mb-2'>chizitelu.azih.231374@gmail.com</div>
                    <div className='text-gray-500 mb-2'>Sweet Cakes for you</div>
                </div>

            </div>
        </div>
    );
};

export default Footer;
