import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar, Hero } from '.'
import { bg, bg2, bgbs, herobs, heross, comsym, footer } from '../assets'
import { commonsigns, navlinks } from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Facebook, Instagram, Email } from '../constants/icons'

const Home = () => {

  // const [activeguide, setactiveguide] = useState(0);
  // const [activetips, setactivetips] = useState(0);
  const navigate = useNavigate();

  const navtoaboutus = () => {
    navigate('/aboutus')
  };
  const navtolearn = () => {
    navigate('/learn');
  };
  const navtotest = () => {
    navigate('/instructions')
  };

  return (
    <div className='w-screen font-montserrat overflow-clip'>
        <img id = 'herobg' src = {window.innerWidth >= 620? herobs : heross} className='object-cover w-full absolute' />
        <Navbar />
        <Hero />
        
        {/* did you know */}
        <div className='h-64 sm:h-72 md:h-screen w-full flex flex-col justify-center px-4 md:px-8 sm:px-8 text-secondary space-y-4'>
          <h1 className='font-black text-[24px] md:text-[44px]'>Did You Know?</h1>
          <p className='font-bold text-[14px] md:text-[24px] sm:w-1/2'>Dyslexia is a very common Learning Difficulty. 1 in 10 children struggle with it. Dyslexia can make it hard for children to perform well in school, but it is very simple to help these children improve.</p>
          <button className='w-1/2 h-10 sm:w-1/4 md:h-16 font-bold text-[14px] md:text-[24px] border-secondary text-secondary hover:bg-orange hover:text-white rounded-full flex items-center justify-center' onClick = {navtolearn}>
          <p>Learn More</p>
          <FontAwesomeIcon icon={faChevronRight} className='animate-pulse' />
          <FontAwesomeIcon icon={faChevronRight} className='animate-pulse' />
          <FontAwesomeIcon icon={faChevronRight} className='animate-pulse' />
          </button>
        </div>

        <div className='w-full lg:h-screen sm:h-96 overflow-clip absolute'>
          <img src={comsym} className='w-full' />
        </div>
        <div className='relative w-full h-72 sm:h-[25rem] lg:h-[50rem] font-montserrat text-white px-4 sm:px-8 flex flex-col justify-center pt-4 overflow-y-auto'>
          <h1 className='font-black text-[24px] md:text-[44px]'>Some Common Signs</h1><br/>
          {commonsigns.map((cs, index) => (
            <li key={cs.id} className='flex-shrink-0 font-bold text-[14px] md:text-[24px] leading-relax'>
              {cs.s}
            </li>
          ))}
        </div>
        {/* <div className='w-full h-64 max-ss:hidden lg:hidden bg-white absolute' /> */}
        
        <div className='h-[70vh] max-ss:pt-10 font-montserrat flex flex-col sm:flex-wrap'>
          <div className='w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col justify-end'>

            {/* message from the therapist */}
            <div className='w-full h-3/4 flex flex-col justify-end pt-4 space-y-3 px-4 lg:px-8 text-center text-secondary'>
              <h1 className='text-[24px] sm:text-[30px] font-black'>Message From A Therapist</h1>
              <p className='text-[12px] sm:text-[18px] font-bold'>“Many people around you will judge you and your child without understanding your situation, but only a psychologist will hear you without any judgment. They are here to help you. Talk to a professional and help your child improve before the issue gets worse.”</p>
              <p className='font-black text-[12px]'>Raazieh Fatima, Founder TMS</p>
            </div>

            <div className='w-full h-1/4 flex items-end space-x-3 px-2 font-black text-white text-[14px] justify-center'>

            <button className='w-1/3 h-10 sm:w-1/3 sm:h-16 font-bold text-[16px] md:text-[24px] border-secondary text-secondary hover:bg-orange hover:text-white rounded-full flex items-center justify-center' onClick = {navtolearn}>
            <p>Learn More</p>
            </button>
            <button className='w-1/3 h-10 md:w-1/3 sm:h-16 font-bold text-[16px] md:text-[24px] text-white bg-orange md:bg-yellow hover:bg-orange rounded-full' onClick={navtotest}>
            Take Test
            </button>
              {/* <div className='w-1/2 h-2/3 bg-orange flex items-center justify-center text-center transition ease-in-out hover:-translate-y-1 hover:scale-110 rounded-xl' onClick={() => setactiveguide(1)}>Guide for<br/> Parents</div>

              <div className='w-1/2 h-2/3 bg-orange flex items-center justify-center text-center transition ease-in-out hover:-translate-y-1 hover:scale-110 rounded-xl' onClick={() => setactivetips(1)}>Tips for Taking<br/> the Test</div> */}
            </div>

            
          </div>
          <div className='w-full sm:w-1/2 h-1/2 sm:h-full  flex flex-col items-center justify-end space-y-3 px-4 lg:px-8 text-center text-secondary'>
            <div className = 'w-full h-3/4 flex flex-col justify-center pt-4 space-y-3 px-4 lg:px-8 text-center text-secondary'>
              <h1 className='text-[24px] sm:text-[30px] font-black'>Message From The Team</h1>
              <p className='text-[12px] sm:text-[18px] font-bold'>Hello! We are a team of 3 students from Habib University and this our year long work. We hope this helps you on your journey of exploring Dyslexia! To know more about us, go to</p>
            </div>
            <button className='w-1/2 h-10 sm:w-1/2 sm:h-16 font-bold text-[16px] md:text-[24px] bg-orange text-white rounded-full flex items-center justify-center' onClick={navtoaboutus}>
            <p>About Us</p>
            <FontAwesomeIcon icon={faChevronRight} className='animate-pulse' />
            <FontAwesomeIcon icon={faChevronRight} className='animate-pulse' />
            <FontAwesomeIcon icon={faChevronRight} className='animate-pulse' />
            </button>
            {/* <h1 className='font-black text-[16px]'>Collaborators</h1>
            <div className='flex font-bold text-[12px] space-x-8'>
              <p>Raazieh Fatima<br/> (Clinical Psychologist,<br/> Founder TMS Inclusive<br/> School)</p>
              <p>Maria Ali<br/> (Remedial Therapist)</p>
            </div>
            <div className='flex font-bold text-[12px] space-x-8'>
              <p>Dr. Neelma Bhatti<br/> (Mentor,<br/> Habib University)</p>
              <p>Dr. Abdul Samad<br/> (Supervisor,<br/> Habib University)</p>
            </div> */}
          </div>
        </div>

        <img src={footer} className='absolute w-full' />
        <div className='w-full h-44 sm:h-[35vh] md:h-screen relative font-montserrat flex items-end pt-12 sm:pt-12'>
          
          {/* Pages */}
          <ul className='w-1/3 list-none text-[10px] sm:text-[24px] cursor-pointer indent-5 sm:indent-16 pb-4 sm:pb-10'>
              {navlinks.map((nav, index) => (
                <li
                  key = {nav.id}
                  onClick = {() => setActive(nav.id)}
                  >
                  <a href = {`${nav.id}`} className={`cursor-pointer text-white font-bold leading-relaxed ${index === navlinks.length -1? "mb-0" : "mb-8"}`}>{nav.title}</a>
                </li>
              ))}
            </ul>

            <div className='w-2/3 h-full font-montserrat text-white space-y-2 p-3 flex flex-col justify-center sm:justify-end sm:pb-10 items-center'>
              <h2 className='text-[12px] sm:text-[24px] font-bold text-center'>Soicals</h2>
              <div className='flex justify-center items-center space-x-3'>
                <a href = "https://www.facebook.com/groups/2109572699238889" target = "_blank">
                  <Facebook />
                </a>
                <a href = "https://www.instagram.com/projectdysign" target = "_blank">
                  <Instagram />
                </a>
                <a href = "mailto:project.dysign@outlook.com" target = "_blank">
                  <Email />
                </a>
              </div>
              <p className='text-[10px] sm:text-[20px] text-center italic px-8 md:w-1/2'>Every child is different, let's help them grow how they are!</p>
            </div>
        </div>
    </div>
  )
}

export default Home