import React from 'react'
import {hero_logo} from '../assets'
import {styles} from '../styles'
import { Link, useNavigate } from 'react-router-dom'

const Hero = () => {

  const navigate = useNavigate();

  const navtotest = () => {
    navigate('/Test')
  };

  return (
    <div className='flex flex-col items-center lg:items-start justify-center relative h-[500px] lg:ml-[100px] w-screen'>

      {/* logo */}
      <img src={hero_logo} alt = "logo" className='w-[230px] lg:w-[345px]' />
      {/* <div className='h-[90px] pt-[10px]'>
        <img src = {hero_logo} className='w-[230px] h-[86px] lg:w-[345px]' />
      </div> */}

      {/* big text */}
      <div className='font-handrawn text-primary text-[25px] text-center pl-[80px] pr-[80px] h-[200px] w-screen flex items-center'>
      "It is comforting to know that my child is not disabled - they just learn differently.""
      </div>

      {/* small text */}
      <div className='flex flex-wrap justify-center font-roboto w-[300px] text-[15px]'>
        Take <p className='font-bold w-[85px] text-center'> 10 minutes </p> to check if your child is also a <p className='font-bold w-[120px] text-center'> different learner.</p>
      </div>

      {/* button */}
      <div className='w-screen h-[90px] flex justify-center items-center'>
        <div onClick={navtotest} className={`${styles.herobutton}`}>
          Take Test
        </div>
      </div>
    </div>
  )
}

export default Hero