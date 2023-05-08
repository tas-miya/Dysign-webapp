import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { herotext } from '../constants'
import { circles, TMC, READ, CIC } from '../assets';

const Hero = () => {
  const navigate = useNavigate();

  const navtotest = () => {
    navigate('/instructions')
  };
  
  return (
    <div className='relative h-screen sm:h-[60rem] lg:h-[90rem] font-montserrat overflow-clip'>

      {/* info and testimonials */}
        <div className='w-full h-4/5 flex flex-col justify-center sm:justify-end lg:pb-32 items-center lg:items-start md:px-8 lg:pt-40 pt-32 sm:space-y-4'>
        
        <div className='flex max-md:flex-col w-full md:space-x-10 items-center sm:h-1/2 h-full space-y-6'>
          {/* header text */}
            <div className='w-full md:w-1/3 h-2/5 max-md:text-center text-white flex flex-col justify-end space-y-2'>
              <h1 className='font-black text-[24px] md:text-[44px]'>Welcome to DySign!</h1>
              <p className='font-bold text-[14px] md:text-[24px] sm:px-12 lg:px-0'>Our project to assist you on your journey in discovering Dyslexia & Learning Difficulties, and an AI tool to screen for it.</p>
            </div>
          
          {/* testimonials */}
            <div className='w-full md:w-3/5 snap-x flex scroll-smooth overflow-x-auto space-x-4'>
            {herotext.map((text, index) => (
                  <div key = {text.id} className='flex-shrink-0 flex items-center snap-center w-52 h-52 md:w-72 md:h-72 bg-white rounded-2xl px-2'>
                    <p className='text-[14px] md:text-[18px] text-center font-bold text-secondary'>{text.quote}</p>
                  </div>
                ))}
            </div>
        </div>
        <button className='w-1/3 h-12 md:w-1/4 md:h-16 font-bold text-[14px] md:text-[24px] text-white bg-yellow hover:bg-orange rounded-full' onClick={navtotest}>
          Take Test
        </button>
        </div>


        {/* acknowledgments */}
        {/* <h className='text-center text-[14px]'>Special Thanks to</h> */}
        <div className='w-full h-1/5 flex items-center justify-between pr-4'>
          <img src={circles} className='h-3/5 md:h-3/4'/>
          <img src={CIC} className='w-1/5 md:w-48' />
          <img src={TMC} className='w-2/5 md:w-96' />
          <img src={READ} className='w-1/5 md:w-60' />
        </div>
    </div>
  )
}

export default Hero