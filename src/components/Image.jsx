import React, { useState } from 'react';

const Image = () => {
    const [activeSlide, setActiveSlide] = useState('Juliet');

    const slideItem = [
        { name: 'Juliet', key: 'Juliet' },
        { name: 'Gerald', key: 'Gerald' },
        { name: 'Dave', key: 'Dave' },
    ];

    const slideItems = () => {
        switch (activeSlide) {
            case 'Juliet':
                return (
                    <div className='flex flex-col justify-center items-center mt-4 bg-white p-4 rounded-lg'>
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
                    </div>
                );
            case 'Gerald':
                return (
                    <div className='flex flex-col justify-center items-center mt-4 bg-white p-4 rounded-lg'>
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
                          src="../src/assets/images/Gerald.png" 
                          className='w-[80px] h-[80px] rounded-full'
                          alt="Gerald"
                        />
                        <p className='mt-2 font-bold text-[20px]'>Gerald</p>
                    </div>
                );
            case 'Dave':
                return (
                    <div className='flex flex-col justify-center items-center mt-4 bg-white p-4 rounded-lg'>
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
                          src="../src/assets/images/Dave.png" 
                          className='w-[80px] h-[80px] rounded-full'
                          alt="Dave"
                        />
                        <p className='mt-2 font-bold text-[20px]'>Dave</p>
                    </div>
                );
            default:
                return null;
        }
    };

    // Function to render the 3 dots under the section
    const renderDots = () => {
        return (
            <div className="flex justify-center mt-6">
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
        <div>
            <div className='relative'>
                <img src="../src/assets/background/testimonials-bg.png" alt="background" />
                <div className='flex justify-center items-center mt-5 absolute top-4 inset-x-0'>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-5xl mb-2'>Testimonials</h1>
                        <img 
                          src="../src/assets/background/about.png" 
                          className='w-[240px] mb-2'
                          alt="about"
                        />
                        <p className='text-center text-xl w-[350px]'>Discover why Rachies Cake delights every palate, one testimonial at a time.</p>

                        {/* Render the content of the current slide */}
                        {slideItems()}

                        {/* Render the 3 dots navigation */}
                        {renderDots()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Image;
