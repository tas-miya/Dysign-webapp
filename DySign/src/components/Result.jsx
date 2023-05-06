import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function Result({ location }) {
    
    //const { prediction } = location.state || {}; // assign an empty object as a fallback
    console.log(location.state)
    const prediction = location?.state?.prediction;
    const [halfway, setHalfway] = useState(false);
    const [final, setFinal] = useState(false);

    const navigate = useNavigate();
    const navtohome = () => {
        navigate('/');
    };
    const navtolearn = () => {
        navigate('/learn')
    };

    setTimeout(() => {
        setHalfway(true);
    }, 2000);

    setTimeout(() => {
        setFinal(true);
    }, 4000)

    const roundPred = prediction ? (prediction * 100).toFixed(2) : null;
  return (
    <div className='w-screen h-screen bg-yellow flex flex-col justify-center items-center font-montserrat text-center'>
        {
            !final ?
            <>
            <div className='font-black text-[50px] text-black text-center'>
            Now We Wait!<br /> 
            <div className={`${halfway ? "transition ease-linear duration-100 text-black" : "text-yellow"}`}>
                Any Moment Now
            </div>
            <div on className='animate-pulse font-bold text-black text-center text-[100px]'>
                . . .
            </div>
            </div>
            </>
            :
            <div className='result-in font-bold w-full h-screen flex flex-col justify-between'>
                <div className='w-full h-1/3 flex justify-end px-4 md:px-8 pt-4 md:pt-8 text-[24px] sm:text-[32px]'>
                    <FontAwesomeIcon icon={faHouse} style={{color: "#000000"}} onClick = {navtohome} />
                </div>
                <div className='text-[32px] md:text-[44px] text-black font-black'>
                {roundPred}% <br/> Risk of Dyslexia <br /><br />
                </div>
                <div className='text-[25px] text-black flex flex-col items-center'>
                
                <p className={`${roundPred > 20? "" : "hidden"}`}>Our screener says that your child is showing some signs of Dyslexia in their handwriting*.<br /><br /></p>

                <p className={`${roundPred < 20? "" : "hidden"}`}>Our screener says that your child is not showing many signs of Dyslexia in their handwriting*.</p>
                
                </div>
                <br/>
                <div className='w-full flex justify-center space-x-3'>
                    <button className='w-1/3 h-12 sm:w-1/4 md:h-24 font-bold text-[14px] md:text-[24px] border-black border-2 text-black bg-transparent max-sm:bg-black max-ss:text-white hover:bg-black hover:text-white rounded-full flex items-center justify-center' onClick={navtolearn}>
                    <p>More About Dyslexia</p>
                    </button>

                    {/* <button className='w-1/3 h-12 sm:w-1/4 md:h-24 font-bold text-[14px] md:text-[24px] border-black border-2 text-black bg-transparent max-sm:bg-black max-ss:text-white hover:bg-black hover:text-white rounded-full flex items-center justify-center'>
                    <p>Talk To An Expert</p>
                    </button> */}
                </div>
                <div className='w-full h-1/2 pb-2 flex items-end'>
                    <p className=' text-[12px]'>*DISCLAIMER: This screening test is still under development. The results are not accurate yet. Please refer to a clinical psychologist for official diagnosis.</p>
                </div>
            </div>
        }
    </div>
  )
}

export default Result
