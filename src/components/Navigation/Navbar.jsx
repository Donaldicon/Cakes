import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import OrderNow from './OrderNow';

const Navbar = () => {
  return (
    <div className='bg-dark-background sticky top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between bg-gray-300 px-4 shadow-2xl py-2'>
      <Logo />
      <Nav />
      <OrderNow />
    </div>
  );
};

export default Navbar;
