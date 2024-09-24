import React from 'react'
import VericalDots from './VericalDots'
import work1 from '../assets/images/work1.png'
import work2 from '../assets/images/work2.png'
import work3 from '../assets/images/work3.png'

const WorkDays = () => {
  return (
    <div className='flex items-center justify-center py-3'>
        <div className='flex flex-row justify-between items-start'>
            <img 
            src={work1}
            className='w-[100px] md:w-[132px]' 
            alt="" />
            <VericalDots />
            <img 
            src={work2}
            className='w-[75px] md:w-[101px]'
            alt="" />
            <VericalDots />
            <img 
            src={work3}
            className='w-[120px] md:w-[175px]'
            alt="" />
        </div>
    </div>
  )
}

export default WorkDays