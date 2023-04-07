import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Result({ location }) {
    
    //const { prediction } = location.state || {}; // assign an empty object as a fallback
    console.log(location.state)
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
    <div className='w-screen h-screen bg-almond flex flex-col justify-center items-center font-roboto text-center'>
        {
            !final ?
            <>
            <div className='font-bold text-[50px] text-black text-center'>
            Now We Wait!<br /> 
            <div className={`${halfway ? "transition ease-linear duration-100 text-black" : "text-almond"}`}>
                Any Moment Now
            </div>
            <div on className='animate-pulse font-bold text-black text-center text-[100px]'>
                . . .
            </div>
            </div>
            </>
            :
            <div className='result-in font-bold'>
                <div className='text-[40px] text-black'>
                {roundPred}% <br/> Neurodivergent! <br /><br /><br />
                </div>
                <div className=' text-[30px] text-black'>
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
