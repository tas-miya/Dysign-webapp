import React from 'react'
import { Navbar, Hero } from '.'
import { bg2, bgbs, hero_logo, logo, menu, TMC, READ, CIC, ar } from '../assets'
import { commonsigns, navlinks } from '../constants'
import { Facebook, Instagram, Email } from '../constants/icons.jsx'

const Home2 = () => {
  return (
    <div className='w-screen'>
      {/* <div className='h-screen'>

      </div> */}
      <img src = {window.innerWidth < 620? bg2 : bgbs} alt = "background" className='absolute w-screen' />
      {/* <Navbar />
      <Hero /> */}
      {/* Navbar */}
      <div className='w-full max-ss:h-20 h-40 relative flex items-center justify-between max-ss:px-4 px-12'>
        <img src={logo} alt = 'logo' className='max-ss:w-20 w-40' />
        <img src={menu} alt = 'menu' className='max-ss:w-5 w-10' />
      </div>

      {/* Hero */}
      <div className='w-full max-ss:h-[500px] h-[800px] relative flex flex-wrap sm:flex-col max-ss:justify-center justify-end max-ss:items-center font-montserrat text-white max-ss:pt-20 sm:pl-16 pb-5'>

        <img src={hero_logo} alt='hero logo' className='max-ss:w-3/4 sm:hidden' />

        <p className='max-ss:w-3/4 w-1/2 max-ss:text-center font-bold max-ss:text-[18px] text-[36px]'>“My child used to be so difficult and hyper and he used to struggle in school. Now he has improved so much and he gets good grades too!” </p>
        <br />
        <div className='flex flex-wrap max-ss:justify-center max-ss:w-3/4 w-1/3 max-ss:text-[15px] text-[24px]'>
        Take <p className='font-bold w-1/3 text-center'> 10 minutes </p> to check if your child is also a <p className='font-bold max-ss:w-1/2 w-1/2'> different learner.</p>
        </div>
        <br />
        <div className='max-ss:w-1/3 w-1/4 max-ss:h-10 h-16 bg-orange rounded-full flex justify-center items-center font-black max-ss:text-[14px] text-[24px]'>
          Take Test
        </div>
      </div>

      {/* Contributors */}
      <div className='w-full max-ss:h-24 h-60 relative flex flex-wrap justify-around pt-10 max-ss:pt-4 max-ss:pb-2'>
        <h2 className='font-montserrat font-black text-white max-ss:text-[12px] text-[24px]'>Special Thanks to</h2>
        <div className='flex justify-around items-center pl-12'>
          <img src={TMC} alt='TMC logo' className='object-scale-down max-ss:w-1/3 w-1/4' />
          <img src={CIC} alt='CIC logo' className='object-scale-down max-ss:w-1/5 w-1/6' />
          <img src={READ} alt='READ logo' className='object-scale-down max-ss:w-1/4 w-1/5' />
        </div>
      </div>

      {/* Did you know */}
      <div className='w-full max-ss:h-72 h-[700px] relative px-20 font-montserrat text-secondary space-y-2 flex flex-col justify-center'>
        <h2 className='font-black max-ss:text-[16px] text-[36px]'>Did You Know?</h2>
        <p className=' w-full sm:w-1/2 font-bold max-ss:text-[12px] text-[24px]'>Dyslexia is a Learning Difficulty(LDs) that appears in about 15% of the global population... Undiagonosed LDs causes mental health problems as the struggle gets misunderstood as a behavorial problem...</p>
        <div className='w-1/4 max-ss:w-3/4 h-16 max-ss:h-10 bg-orange rounded-full text-white font-bold text-[24px] max-ss:text-[14px] flex justify-center items-center'>
          Learn More
          <span className='flex w-1/3 animate-pulse pl-2 justify-center'>
            <img src = {ar} className='object-scale-down w-1/4' />
            <img src = {ar} className='object-scale-down w-1/4' />
            <img src = {ar} className='object-scale-down w-1/4' />
          </span>
          </div>
      </div>

      {/* Common Symptoms */}
      <div className='w-full max-ss:h-60 h-[800px] relative font-montserrat flex flex-wrap sm:flex-col text-white max-ss:px-10 px-20 py-6 justify-center max-ss:items-center space-y-3'>
        <ul className='list-disc flex max-ss:flex-wrap sm:flex-col w-full pl-5 space-y-1'>
          <h2 className='font-black text-[16px] sm:text-[36px]'>Common Sign</h2><br />
          {commonsigns.map((cs, index) => (
            <li key={cs.id} className='font-bold text-[12px] sm:text-[24px]'>
              {cs.s}
            </li>
          ))}
        </ul>
        <br />
        <div className='w-1/2 sm:w-1/3 h-10 sm:h-16 bg-yellow rounded-full flex justify-center items-center font-bold text-[14px] sm:text-[24px]'>
          Take Test
        </div>
      </div>
      
      {/* About */}
      <div className = 'w-full h-60 sm:h-[700px] relative flex max-ss:flex-wrap font-montserrat text-secondary text-center items-center'>

        <div className='max-ss:w-full max-ss:h-1/2 w-1/2 h-full flex flex-col justify-end sm:justify-center px-2 sm:px-8'>
          <h2 className='font-black text-[16px] sm:text-[36px]'>About Us</h2>
          <p className='font-bold text-[12px] sm:text-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. labore et dolore magna aliqua. Ut enim ad minim veniam. laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div className='max-ss:w-full max-ss:h-1/2 w-1/2 h-full flex flex-col justify-center px-2 space-y-2'>
          <h2 className='font-black text-[16px] sm:text-[36px]'>Contributors</h2>
          <div className='flex justify-around items-center'>
            <img src={TMC} alt='TMC logo' className='object-scale-down w-1/3' />
            <img src={CIC} alt='CIC logo' className='object-scale-down w-1/5' />
            <img src={READ} alt='READ logo' className='object-scale-down w-1/4' />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='w-full h-36 sm:h-60 relative font-montserrat flex items-center pt-8 sm:pt-12'>
          
          {/* Pages */}
          <ul className='w-1/3 list-none text-[10px] sm:text-[20px] cursor-pointer indent-5 sm:indent-16'>
              {navlinks.map((nav, index) => (
                <li
                  key = {nav.id}
                  // onClick = {() => setActive(nav.title)}
                  >
                  <a href = {`#${nav.id}`} className={`cursor-pointer text-white font-bold leading-relaxed ${index === navlinks.length -1? "mb-0" : "mb-4"}`}>{nav.title}</a>
                </li>
              ))}
            </ul>

            <div className='w-2/3 h-full font-montserrat text-white space-y-2 p-3 flex flex-col justify-center'>
              <h2 className='text-[12px] sm:text-[24px] font-bold text-center'>Soicals</h2>
              <div className='flex justify-center items-center space-x-3'>
                <a href = "https://www.facebook.com/groups/2109572699238889" target = "_blank"><Facebook /></a>
                <a href = "https://www.instagram.com/projectdysign" target = "_blank"><Instagram /></a>
                <a href = "mailto:project.dysign@outlook.com" target = "_blank"><Email /></a>
              </div>
              <p className='text-[10px] sm:text-[20px] text-center italic pl-8 pr-8'>Every child is different, let's help them grow how they are!</p>
            </div>
        </div>

    </div>
  )
}

export default Home2