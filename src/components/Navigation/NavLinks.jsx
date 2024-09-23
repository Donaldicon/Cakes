import React from 'react';
import { Link } from 'react-scroll';
import call from '../Navigation/call.png'
import instagram from '../Navigation/Instagram - Negative.png'
import whatsapp from '../Navigation/ri_whatsapp-fill.png'


const NavLinks = () => {
  const whatsApp = 'https://wa.link/0zpjwq'
  return (
    <>
      <Link to="about" smooth={true} duration={800} className='cursor-pointer mt-2 md:mt-0'>About</Link>
      <Link to="gallery" smooth={true} duration={800} className='cursor-pointer mt-2 md:mt-0'>Gallery</Link>
      <Link to="testimonials" smooth={true} duration={800} className='cursor-pointer mt-2 md:mt-0'>Testimonials</Link>
      <Link to="contact" smooth={true} duration={800} className='cursor-pointer mt-2 md:mt-0'>Contact</Link>
      
      <Link to={whatsApp}>
      <div className='flex flex-row w-[100px] items-center justify-evenly mt-2 mb-2 md:hidden'>
        <img src={call} alt="call" className='w-4 h-4'/>
        <img src={instagram} alt="Instagram" className='w-4 h-4'/>
        <img src={whatsapp} alt="Whatsapp" className='w-4 h-4'/>
      </div>
      </Link>
    </>
  );
};

export default NavLinks;
