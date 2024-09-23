import React from 'react';
import { Link } from 'react-scroll';

const NavLinks = () => {
  return (
    <>
      <Link to="about" smooth={true} duration={800} className='cursor-pointer mt-2 md:mt-0'>About</Link>
      <Link to="gallery" smooth={true} duration={800} className='cursor-pointer mt-2 md:mt-0'>Gallery</Link>
      <Link to="testimonials" smooth={true} duration={800} className='cursor-pointer mt-2 md:mt-0'>Testimonials</Link>
      <Link to="contact" smooth={true} duration={800} className='cursor-pointer mt-2 md:mt-0'>Contact</Link>
      
      <div className='flex flex-row w-[100px] items-center justify-evenly mt-2 mb-2 md:hidden'>
        <img src="../src/assets/logos/call.png" alt="call" className='w-4 h-4'/>
        <img src="../src/assets/logos/Instagram - Negative.png" alt="Instagram" className='w-4 h-4'/>
        <img src="../src/assets/logos/ri_whatsapp-fill.png" alt="Whatsapp" className='w-4 h-4'/>
      </div>
    </>
  );
};

export default NavLinks;
