import React, { useState } from 'react';
import spiralImage from '../assets/images/gallery-rose.png';

import cookiesCake from '../assets/images/cookiescake.png'
import chocolateCake from '../assets/images/chocolatecake.png'
import redVelvet from '../assets/images/redvelvet.png'

import frame21 from '../assets/images/frame2-1.png'
import frame22 from '../assets/images/frame2-2.png'
import frame23 from '../assets/images/frame2-3.png'

import frame31 from '../assets/images/frame3-1.png'
import frame32 from '../assets/images/frame3-2.png'
import frame33 from '../assets/images/frame3-3.png'

import frame41 from '../assets/images/frame4-1.png'
import frame42 from '../assets/images/frame4-2.png'
import frame43 from '../assets/images/frame4-3.png'

import about from '../assets/background/about.png'
import whiteBg from '../assets/images/white-bg.avif'


const Gallery = () => {
    const [activeSection, setActiveSection] = useState('popular');

    const navItems = [
        { name: 'Popular Cakes', key: 'popular' },
        { name: 'Celebration Cakes', key: 'celebration' },
        { name: 'Wedding Cakes', key: 'wedding' },
        { name: 'Special Cakes', key: 'special' },
    ];

    const renderContent = () => {
        if (activeSection === 'popular') {
            return (
                <div className='flex flex-row-reverse md:flex-row items-center px-4'>
                    <div className='flex flex-col justify-center ml-3 md:mr-7'>
                        <img src={cookiesCake} alt="" className='w-[122px] lgr:w-[350px] md:w-[285px] mb-3 rounded-xl'/>
                        <img src={chocolateCake} alt="" className='w-[122px] lgr:w-[350px] md:w-[285px]'/>
                    </div>
                    <img src={redVelvet}alt="" className='w-[125px] lgr:w-[350px] md:w-[287px]' />
                </div>
            );
        } else if (activeSection === 'celebration') {
            return (
                <div className='flex flex-row-reverse md:flex-row items-center'>
                    <div className='flex flex-col justify-center ml-2 md:mr-7'>
                        <img src={frame21} alt="" className='w-[122px] lgr:w-[350px] md:w-[285px] mb-2 md:mb-5 rounded-xl'/>
                        <img src={frame22} className='w-[122px] lgr:w-[350px] md:w-[285px]'/>
                    </div>
                    <img src={frame23} alt="" className='w-[185px] lgr:w-[535px] md:w-[440px]' />
                </div>
            );
        } else if (activeSection === 'wedding') {
            return (
                <div className='flex flex-row-reverse md:flex-row items-center'>
                    <div className='flex flex-col justify-center ml-2 md:mr-7'>
                        <img src={frame31} alt="" className='w-[122px] lgr:w-[350px] md:w-[285px] mb-2 md:mb-5 rounded-xl'/>
                        <img src={frame32} alt="" className='w-[122px] lgr:w-[350px] md:w-[285px]'/>
                    </div>
                    <img src={frame33} alt="" className='w-[185px] lgr:w-[535px] md:w-[440px]' />
                </div>
            );
        } else if (activeSection === 'special') {
            return (
                <div className='flex flex-row-reverse md:flex-row items-center'>
                    <div className='flex flex-col justify-center ml-2 md:mr-7'>
                        <img src={frame41} alt="" className='w-[122px] lgr:w-[350px] md:w-[285px] mb-2 md:mb-5 rounded-xl'/>
                        <img src={frame42} alt="" className='w-[122px] lgr:w-[350px] md:w-[285px]'/>
                    </div>
                    <img src={frame43}alt="" className='w-[185px] lgr:w-[535px] md:w-[440px]' />
                </div>
            );
        } else {
            return null;
        }
    };

    const getBackgroundPosition = () => {
        if (activeSection === 'popular') {
            return 'top 0% left 50%';
        } else if (activeSection === 'celebration') {
            return 'top 25% left 50%';
        } else if (activeSection === 'wedding') {
            return 'top 50% left 50%';
        } else if (activeSection === 'special') {
            return 'top 75% left 50%';
        } else {
            return 'top 0% left 50%';
        }
    };

    return (
        <div id='gallery'>
            {/* Mobile and smaller screens */}
            <div className='bg-white flex flex-col justify-center items-center px-2 py-4 md:hidden'>
                <h1 className='text-5xl mb-2'>Gallery</h1>
                <img src={about} className='w-[140px] mb-3' alt="" />
                <div className='flex w-[350px] justify-between items-center bg-blue-50 py-1 px-2 rounded-md mb-2'>
                    {navItems.map((sectionitems) => (
                        <div
                        key={sectionitems.key}
                        className='text-center pb-2 hover:cursor-pointer transition-all translate-x-2 ease-in-out'
                        onClick={() => setActiveSection(sectionitems.key)}
                        >
                            <span className={`text-lg font-bold ${activeSection === sectionitems.key ? 'text-purple-500' : 'text-gray-700'}`}>
                                {sectionitems.name}
                            </span>

                        </div>
                    ))}
                </div>
                <div className='mt-5'>
                    {renderContent()}
                </div>
            </div>

            {/* Tablet and larger screens */}
            <div className='bg-[#fff] hidden md:block'>
                <div className='relative py-2'>
                    <div 
                        className={`absolute top-0 left-0 w-full h-full transform transition-all duration-1000 ease-in-out`}
                        style={{
                            backgroundImage: `url(${spiralImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: getBackgroundPosition(),
                        }}
                    />
                    <img src={whiteBg} 
                    className='h-[640px] lgr:h-[750px]'
                    alt="" />

                    <div className='absolute top-0 flex flex-col items-center w-full'>
                        <h1 className='text-5xl mb-2'>Gallery</h1>
                        <img src={about} className='w-[140px]' alt="" />

                        <div className='flex flex-col w-full items-center'>
                            <div className='flex justify-between w-full max-w-2xl relative'>
                                {/* Long ash line */}
                                <div className='absolute bottom-0 left-0 right-0 h-[3px] bg-gray-300 rounded-lg'></div>

                                {/* Section titles */}
                                {navItems.map((item) => (
                                    <div
                                        key={item.key}
                                        className='relative text-center pb-2 hover:cursor-pointer transition-all ease-in-out'
                                        onClick={() => setActiveSection(item.key)}
                                    >
                                        
                                        <span className={`text-lg font-bold ${activeSection === item.key ? 'text-black' : 'text-gray-500'}`}>
                                            {item.name}
                                        </span>
                                        {/* Purple highlight */}
                                        {activeSection === item.key && (
                                            <div
                                                className='absolute bottom-0 left-0 right-0 h-[3px] bg-purple-500 rounded-lg'
                                                style={{
                                                    transition: 'all 1s ease-in-out',
                                                }}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='mt-10'>
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
