import React from 'react'
import { Navbar, Hero, Contributors } from './index'

const Home = () => {
  return (
    <div className='w-screen h-full bg-almond'>
        <Navbar />
        <Hero />
        <Contributors />
      </div>
  )
}

export default Home