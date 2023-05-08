import React from 'react'
import { Navbar } from '.'
import { herobs } from '../assets'

const Aboutus = () => {
  return (
    <div className='w-screen h-screen font-montserrat text-secondary'>
        <div className='w-full h-full overflow-clip bg-white absolute'>
            <img src={herobs} className='opacity-40 w-full'/>
        </div>
        <Navbar />
        <div className='w-full h-full flex flex-col text-center px-4 pt-10 relative'>
            <h1 className='font-black text-[32px] sm:text-[40px] text-center mt-10 sm:mt-32'>Who Are We & What Is DySign?</h1><br/>
            <div className='w-full sm:px-8 overflow-y-scroll scrollbar-hidden'>
                <p className='font-bold text-[14px] md:text-[16px]'>We are a team of 3 Habib University students and we have been working on this project for almost a year. We wanted to make something that would help parents understand LDs and provide them support. The screening test, the website, the list of FAQs and experts have all been put together with a lot of effort and love for the cause. We hope you find it helpful in your journey!<br/>
                DySign is an AI tool and a platform to spread awareness regarding learning difficulties, and provide a free of cost channel for parents to help their children. It is a small contribution from us to ease the struggles of children who are smart but need an extra push with their reading and writing. Learning Difficulties are not a disease, and if we play our parts, especially parents, in supporting their children, we will definitely save their mental and emotional health, while giving them the confidence on their abilties. Please keep an out for the children around you, maybe your encouragment and help will them big time!</p><br/><br/>

                <div className='w-full flex flex-col items-center space-y-2 text-center'>
                    <h1 className='font-black text-[16px] md:text-[24px]'>Collaborators</h1>
                    <div className='md:w-1/3 flex justify-between font-bold text-[14px] md:text-[16px] space-x-8'>
                    <p>Raazieh Fatima<br/> (Clinical Psychologist,<br/> Founder TMS Inclusive<br/> School)</p>
                    <p>Dr. Neelma Bhatti<br/> (Mentor,<br/> Habib University)</p>
                    </div>
                    <div className='md:w-1/3 flex justify-between font-bold text-[12px] md:text-[16px] space-x-8'>
                    <p>Maria Ali<br/> (Remedial Therapist)</p>
                    <p>Dr. Abdul Samad<br/> (Supervisor,<br/> Habib University)</p>
                    </div>
                </div>
            </div>


        </div>

    </div>
  )
}

export default Aboutus