import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Result({ location }) {
    
    //const { prediction } = location.state || {}; // assign an empty object as a fallback
    const prediction = location?.state?.prediction;
    const [halfway, setHalfway] = useState(false);
    const [final, setFinal] = useState(false);

    const navigate = useNavigate();
    const navtohome = () => {
        navigate('/');
    }

    setTimeout(() => {
        setHalfway(true);
    }, 2000);

    setTimeout(() => {
        setFinal(true);
    }, 4000)

    const roundPred = prediction ? (prediction * 100).toFixed(2) : null;
  return (
    <div className='w-screen h-screen bg-orange flex flex-col justify-center items-center pt-[200px]'>
        {
            !final ?
            <>
            <div className='font-montserrat font-extrabold text-[50px] text-black text-center'>
            Now We Wait!<br /> 
            <div className={`${halfway ? "transition ease-linear duration-100 text-black" : "text-orange"}`}>
                Any Moment Now
            </div>
            </div>
            <div on className='animate-pulse font-montserrat font-extrabold text-[100px] text-black text-center'>
                . . .
            </div>
            </>
            :
            <div className='result-in font-montserrat font-extrabold text-center'>
                <div className='text-[50px] text-black'>
                {roundPred}% Neurodivergent! <br /><br /><br />
                </div>
                <div className=' text-[35px] text-black'>
                And there are so many more divergents like you!<br />
                Wanna know more<br /><br />
                <span className='animate-pulse inline-flex w-[80px] h-[40px] cursor-pointer' onClick={navtohome}>
                    <img src='https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F8e12874cd06549d296960dabb2c235a9' />
                    <img src='https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F8e12874cd06549d296960dabb2c235a9' />
                    <img src='https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F8e12874cd06549d296960dabb2c235a9' />
                </span>
                </div>

            </div>
        }
    </div>
  )
}

export default Result
