import React from 'react'
import VericalDots from './VericalDots'

const WorkDays = () => {
  return (
    <div className='flex items-center justify-center py-3'>
        <div className='flex flex-row justify-between items-start'>
            <img 
            src="../src/assets/images/work1.png"
            className='w-[132px]' 
            alt="" />
            <VericalDots />
            <img 
            src="../src/assets/images/work2.png" 
            className='w-[101px]'
            alt="" />
            <VericalDots />
            <img 
            src="../src/assets/images/work3.png" 
            className='w-[175px]'
            alt="" />
        </div>
    </div>
  )
}

export default WorkDays