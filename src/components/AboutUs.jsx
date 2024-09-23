import React from 'react'

const AboutUs = () => {
  return (
    <div className='bg-blue-50 flex justify-center' id='about'>
        <div className='md:bg-gray-300  md:border-8 md:border-white max-w-[610px] mt-3 mb-3 flex flex-col justify-center items-center px-3 py-4'>
            <h1 className='text-center italic text-5xl mb-1'>About us</h1>
            <img src="../src/assets/background/about.png" 
            className='w-[150px] mb-2'
            alt="" />
           <p className='text-[16px] text-justify small:hidden md:block'>Welcome to <span className='font-bold'>Rachies Cake</span>, where baking is an artistry born from passion and precision. Founded by Rachel, our bakery transforms ingredients into exquisite delights. From cozy beginnings in Rachel's kitchen to a beloved destination, every creation reflects our commitment to excellence. At Rachies Cake, each treat is crafted with love, from classic favorites to innovative delights. We invite you to join our community and savor moments of sweetness and celebration. Welcome to Rachies Cake, where every bite is a masterpiece, and every customer is cherished.</p>
           <p className='w-200px text-[26px] text-justify md:hidden'>
            Welcome to Rachies Cake, where baking is an artistry born of passion. Founded by Rachel Smith, our bakery transforms ingredients into excellence. Join our community, savoring every masterpiece bite
           </p>
        </div>
    </div>
  )
}

export default AboutUs