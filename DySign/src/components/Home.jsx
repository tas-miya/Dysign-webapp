import React from 'react'
import { Navbar, Hero, Contributors } from './index'
import { useNavigate } from 'react-router-dom'
import {CIC, TMC, READ} from '../assets'
import { info, commonsigns, aboutus, navlinks } from '../constants'
import { Facebook, Instagram, Email } from '../constants/icons.jsx'

const Home = () => {

  const navigate = useNavigate();
  const navtotest = () => {
    navigate('/Test')
  }
  return (
    <div className='w-screen bg-almond'>
        <Navbar />
        <Hero />
        {/* <Contributors /> */}
        
        <div className='h-[100px] flex pr-5 pl-5 bg-cinerous justify-around items-center bg-fixed'>
            <img src={TMC} alt='TMC logo' className='object-scale-down w-1/3 h-1/3' />
            <img src={CIC} alt='CIC logo' className='object-scale-down w-1/3 h-1/3' />
            <img src={READ} alt='READ logo' className='object-scale-down w-1/4 h-1/4' />
        </div>

        {/* Information */}
        <div className='bg-white'>
          {info.map((info, index) => (
              <ul className='list-none flex justify-center items-center flex-cols pr-5 pl-5 h-[120px]'>
                  <li key={info.id} className='w-1/3 h-[100px] font-handrawn text-[30px] flex items-center justify-end pr-[8px]'>{info.q}</li>
                  <li key={info.q} className='w-full h-[100px] pl-2 line-clamp-2 leading-relaxed font-roboto text-[14px] flex items-center'>{info.a}</li>
              </ul>
          ))}
          {/* button */}
          <div className='h-[80px] flex justify-center items-center'>
            <div className='xs:w-[120px] h-[40px] bg-flame rounded-2xl cursor-pointer font-roboto font-bold text-center text-almond flex justify-center items-center'>
              Learn More
            </div>
          </div>
        </div>
        
         {/* FAQs and Signs */}
        <div className='h-[300px] bg-flame flex-wrap text-almond font-roboto flex justify-center items-center pt-5'>
          <div className='flex justify-center items-center'>
            <img src = {READ} alt='temp' className='object-scale-down w-1/3 h-1/3 pr-3' />
            <ul className='list-disc flex flex-wrap w-3/5 h-full pl-5'>
              <h2 className='font-bold text-[18px] text-center leading-loose'>Common Sign</h2>
              {commonsigns.map((cs, index) => (
                <li key={cs.id} className='text-[12px] '>
                  {cs.s}
                </li>
              ))}
            </ul>
          </div>

          {/* button */}
          <div className='w-screen h-[80px] flex justify-center items-center'>
            <div className='xs:w-[120px] h-[40px] bg-almond rounded-2xl cursor-pointer font-roboto font-bold text-center text-flame flex justify-center items-center' onClick={navtotest}>
              Take Test
            </div>
          </div>
        </div>

        {/* About us */}
        <div className='h-[200px] bg-almond flex flex-wrap'>
          <div className='w-full h-1/2 flex flex-wrap justify-center items-center p-4 font-roboto'>
            <h2 className='font-bold text-[14px]'>About Us</h2>
            {aboutus.map((au,index) => (
              <p key={au.id} className='text-[12px] text-center'>{au.p}</p>
            ))}
          </div>
          <div className='w-full h-1/2 flex flex-wrap justify-center font-roboto items-center p-5 space-y-2'>
            <h2 className='font-bold text-[14px]'>Contributors</h2>
            <div className='flex flex-wrap justify-around items-center'>
              <img src={TMC} alt='TMC logo' className='object-scale-down w-1/3 h-1/3' />
              <img src={CIC} alt='CIC logo' className='object-scale-down w-1/5 h-1/5' />
              <img src={READ} alt='READ logo' className='object-scale-down w-1/4 h-1/4' />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className='w-full h-[100px] bg-cinerous font-roboto flex items-center'>
          
          {/* Pages */}
          <ul className='w-1/3 list-none  text-[10px] cursor-pointer indent-5'>
              {navlinks.map((nav, index) => (
                <li
                  key = {nav.id}
                  // onClick = {() => setActive(nav.title)}
                  >
                  <a href = {`#${nav.id}`} className={`cursor-pointer text-almond font-bold leading-relaxed ${index === navlinks.length -1? "mb-0" : "mb-4"}`}>{nav.title}</a>
                </li>
              ))}
            </ul>

            <div className='w-2/3 h-full font-roboto text-almond space-y-2 p-3 flex flex-col justify-center'>
              <h2 className='text-[12px] font-bold text-center'>Soicals</h2>
              <div className='flex justify-center items-center space-x-3'>
                <a href = "https://www.facebook.com/groups/2109572699238889" target = "_blank"><Facebook /></a>
                <a href = "https://www.instagram.com/projectdysign" target = "_blank"><Instagram /></a>
                <a href = "mailto:project.dysign@outlook.com" target = "_blank"><Email /></a>
              </div>
              <p className='text-[8px] text-center italic pl-8 pr-8'>Every child is different, let's help them grow how they are!</p>
            </div>
        </div>
      </div>
  )
}

export default Home