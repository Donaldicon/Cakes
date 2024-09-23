import React from 'react'

import blobShape from '../assets/images/Blob Shape.svg'
import semiCircle from '../assets/background/semi-circle.png'
import pattern from '../assets/background/pattern.png'
import rose from '../assets/background/rose.png'
import whiteCake from '../assets/images/white-cake.png'
import fab from '../assets/images/31-fab.png'
import redVelvet from '../assets/images/red-velvet.png'

const Hero = () => {
  return (
    <>
    <div className='bg-[#d37fcb] mt-1 pb-40 lg:hidden'>
       <div className='relative'>
          <img src={blobShape} alt="" className='w-3/5'/>
          <div className='absolute text-gray-100 flex flex-col items-center inset-3/4 left-0 right-0'>
            <h1 className='text-3xl w-[300px] text-center text-gray-200'><span className='text-[#562d52] '>Celebrate liv</span>e sweetness with Rachies Cakes</h1>
            <p className='text-sm w-[250px] mt-4 text-center'>From birthdays and weddings to corporate events and indulgence, Rachies cake has the perfect treat for you</p>
            <button className='border px-2 py-1 mt-4 rounded-md'>Call to order</button>
          </div>
       </div>
    </div>
     {/* Desktop Screen */}

    <div className='relative sm:hidden lg:block small:hidden'>
      <div className='flex flex-row items-center justify-center bg-purple-500 '>
        <div className='text-white pl-4 w-[700px]'>
          <h2 className='text-[45px] w-[500px] leading-[40px] '>Celebrate life's sweetness with Rachies Cakes</h2>
          <p className='mt-4 w-[350px] text-[16px]'>From birthdays and weddings to corporate events and indulgence, Rachies cake has the perfect treat for you</p>
          <button className='border px-2 py-1 mt-4 rounded-md'>Call to order</button>
        </div>

        <div className=''>
          <img src={semiCircle} className='' alt="" />
        </div>

        <div className='bg-white'>

        </div>

      </div>
    <div className='absolute top-0 left-1/2 transform -translate-x-1/2'>
      <img src={pattern} className='h-[180px] w-[300px] desktop:h-[220px]' alt="" />
    </div>
    <div className='absolute bottom-0 right-0 '>
      <img src={pattern} className='h-[200px] w-[300px]' alt="" />
    </div>
    <div className='absolute bottom-0 left-[100px]'>
      <img src={rose}
      className='w-[800px] ' alt="" />
    </div>

    <div className='flex absolute right-[50px] top-1/4 large:top-[180px] large:right-[20px]'>
        <img src={whiteCake} className='desktop:w-[250px] lgr:w-[200px] large:w-[300px] mr-4' alt="" />
      <div className='flex flex-col'>
        <img src={fab} className='mb-4 desktop:w-[250px] lgr:w-[200px] large:w-[300px]' alt="" />
      <img src={redVelvet} className='desktop:w-[250px] lgr:w-[200px] large:w-[300px]' alt="" />
      </div>
    </div>

</div>



    </>
  )
}

export default Hero