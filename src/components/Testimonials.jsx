

import React, { useState } from 'react';

const Testimonials = () => {
    const [activeSlide, setActiveSlide] = useState('Juliet');

    const slideItem = [
        { name: 'Juliet', key: 'Juliet' },
        { name: 'Gerald', key: 'Gerald' },
        { name: 'Dave', key: 'Dave' },
    ];

    const slideItems = () => {
        return (
            <div className='flex flex-col justify-center items-center mt-4 bg-white p-4 rounded-lg' id='testimonials'>
                {activeSlide === 'Juliet' ? (
                    <>
                        <p className='text-center text-xl w-[350px]'>Rachies Cake is my go-to for delicious treats during study sessions. Their cupcakes are a delightful escape!</p>
                        <div className='mt-5 mb-4 w-[160px] flex flex-row items-center justify-between'>
                            {Array(5).fill().map((_, index) => (
                                <img 
                                  key={index}
                                  src="../src/assets/images/rating.png" 
                                  className='w-[25px]'
                                  alt="rating"
                                />
                            ))}
                        </div>
                        <img 
                          src="../src/assets/images/Juliet.png" 
                          className='w-[80px] h-[80px] rounded-full'
                          alt="Juliet"
                        />
                        <p className='mt-2 font-bold text-[20px]'>Juliet</p>
                    </>
                ) : activeSlide === 'Gerald' ? (
                    <>
                        <p className='text-center text-xl w-[350px]'>Cake blew me away with their custom birthday cake. Visually stunning and incredibly delicious. I'll be a repeat customer for sure!</p>
                        <div className='mt-5 mb-4 w-[160px] flex flex-row items-center justify-between'>
                            {Array(5).fill().map((_, index) => (
                                <img 
                                  key={index}
                                  src="../src/assets/images/rating.png" 
                                  className='w-[25px]'
                                  alt="rating"
                                />
                            ))}
                        </div>
                        <img 
                          src="../src/assets/images/single3.jpg" 
                          className='w-[80px] h-[80px] rounded-full object-cover'
                          alt="Gerald"
                        />
                        <p className='mt-2 font-bold text-[20px]'>Gerald</p>
                    </>
                ) : activeSlide === 'Dave' ? (
                    <>
                        <p className='text-center text-xl w-[350px]'>Rachies Cake made our wedding unforgettable with a breathtaking cake that tasted even better than it looked!</p>
                        <div className='mt-5 mb-4 w-[160px] flex flex-row items-center justify-between'>
                            {Array(5).fill().map((_, index) => (
                                <img 
                                  key={index}
                                  src="../src/assets/images/rating.png" 
                                  className='w-[25px]'
                                  alt="rating"
                                />
                            ))}
                        </div>
                        <img 
                          src="../src/assets/images/couple.jpg" 
                          className='w-[80px] h-[80px] rounded-full'
                          alt="Dave"
                        />
                        <p className='mt-2 font-bold text-[20px]'>Dave</p>
                    </>
                ) : null}
            </div>
        );
    };

    // Function to render the 3 dots under the section
    const renderDots = () => {
        return (
            <div className="flex justify-center mt-6" id='testimonials'>
                {slideItem.map((item) => (
                    <div
                        key={item.key}
                        className={`w-4 h-4 rounded-full mx-2 cursor-pointer transition-all ${
                            activeSlide === item.key ? 'bg-purple-500' : 'bg-gray-300'
                        }`}
                        onClick={() => setActiveSlide(item.key)} // Set the active slide when clicked
                    />
                ))}
            </div>
        );
    };

    return (
        <div id='testimonials'>
            <div className='relative'>
                <img src="../src/assets/background/testimonials-bg.png" 
                className='w-full h-[640px] lgr:h-[670px]'
                alt="background" />
                <div className='flex justify-center items-center mt-5 absolute top-4 inset-x-0'>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-5xl mb-2'>Testimonials</h1>
                        <img 
                          src="../src/assets/background/about.png" 
                          className='w-[240px] mb-2'
                          alt="about"
                        />
                        <p className='text-center text-xl w-[350px] md:w-full'>Discover why Rachies Cake delights every palate, one testimonial at a time.</p>

                        {/* mobile screen */}
                        <div className='md:hidden'>
                        {/* Render the content of the current slide */}
                        {slideItems()}

                        {/* Render the 3 dots navigation */}
                        {renderDots()}
                        </div>

                        {/* Tablet and desktop */}
                        <div className='my-5 md:flex flex-row w-[720px] lgr:w-[950px] justify-between items-center hidden' id='testimonials'>
                           <div className='w-[220px] lgr:w-[300px] flex flex-col relative'>
                                <img 
                                src="../src/assets/images/couple.jpg" 
                                className='w-full rounded-t-xl'
                                alt="" />
                                <div className='bg-white px-2 py-8 rounded-b-xl'>
                                    <p className='text-[15px]'>Rachies Cake made our wedding unforgettable with a breathtaking cake that tasted even better than it looked!</p>
                                    <p className='font-bold text-center'>Dave & Sarah</p>
                                </div>

                                <div className='h-[50px] w-[50px] rounded-full bg-gray-500 flex items-center justify-center absolute left-2 top-[195px] lgr:top-[275px]'>
                                    <img src="../src/assets/background/quote.png" 
                                    className='w-[30px]'
                                    alt="" />
                                </div>
                            </div> 

                           <div className='w-[220px] lgr:w-[300px] flex flex-col relative'>
                                <img 
                                src="../src/assets/images/single3.jpg" 
                                className='w-full h-[220px] lgr:h-[300px] rounded-t-xl object-cover'
                                alt="" />
                                <div className='bg-white px-2 py-8 rounded-b-xl'>
                                    <p className='text-[15px]'>Cake blew me away with their custom birthday cake. Visually stunning and incredibly delicious. I'll be a repeat customer for sure!</p>
                                    <p className='font-bold text-center'>Gerald</p>
                                </div>

                                <div className='h-[50px] w-[50px] rounded-full bg-gray-500 flex items-center justify-center absolute left-2 top-[195px] lgr:top-[275px]'>
                                    <img src="../src/assets/background/quote.png" 
                                    className='w-[30px]'
                                    alt="" />
                                </div>
                            </div> 

                           <div className='w-[220px] lgr:w-[300px] flex flex-col relative'>
                                <img 
                                src="../src/assets/images/Juliet.png" 
                                className='w-full rounded-t-xl'
                                alt="" />
                                <div className='bg-white px-2 py-8 rounded-b-xl'>
                                    <p className='text-[15px]'>Rachies Cake is my go-to for delicious treats during study sessions. Their cupcakes are a delightful escape!</p>
                                    <p className='font-bold text-center'>Juliet</p>
                                </div>

                                <div className='h-[50px] w-[50px] rounded-full bg-gray-500 flex items-center justify-center absolute left-2 top-[195px] lgr:top-[275px]'>
                                    <img src="../src/assets/background/quote.png" 
                                    className='w-[30px] '
                                    alt="" />
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
