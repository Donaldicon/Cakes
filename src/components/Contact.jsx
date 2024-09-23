import React from 'react'

const Contact = () => {
  return (
    <div className='mt-2' id='contact'>
        <div className='relative w-full'>
            <img 
            src="../src/assets/background/contact.png" 
            className='w-full h-[500px] object-cover'
            alt="" />
            <div className='flex justify-center items-center absolute top-[120px] inset-x-0'>
                <div className='text-white bg-[#FA57FF] md:bg-[#7D2675] flex flex-col items-center p-10' >
                    <h1 className='text-4xl mb-1'>Our Contact</h1>
                    <img 
                    src="../src/assets/background/about.png" 
                    className='w-[170px] mb-5'
                    alt="" />
                    <div>
                        <p className='text-gray-200 text-xl'> <span className='font-bold text-white'>Phone: </span> +234-8105722281 </p>

                        <p className='text-gray-200 mt-7 text-xl'> <span className='font-bold text-white'>Email: </span> chizitelu.azih.231374@gmail.com </p>

                        <p className='text-gray-200 mt-7 text-xl'> <span className='font-bold text-white'>Address: </span> Line A </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact