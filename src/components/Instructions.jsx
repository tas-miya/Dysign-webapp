import React from 'react'
import { words } from '../constants'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Paper, Pencil, pg2_bg, ready_circles } from '../assets'
// import * as tf from '@tensorflow/tfjs';
import * as tf from '@tensorflow/tfjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Instructions = () => {

  //variables
  const [ind, setind] = useState(0);
  const [page, setpage] = useState(0);
  const navigate = useNavigate();

  // setTimeout(() => {
  //   setInsActive(true);
  // }, 9000);


  //functions
  const navtotest = () => {
    navigate('/test')
  }

  // function Upload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [prediction, setPrediction] = useState(null);
  
    // const navigate = useNavigate();
  
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const handleSubmit = async () => {
      const formData = new FormData();
      formData.append('file', selectedFile);
      try {
        const response = await fetch('http://localhost:5000/predict', {
          method: 'POST',
          body: formData
        });
    
        if (response.status !== 200) {
          throw new Error(`Unexpected response status: ${response.status}`);
        }
    
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new TypeError("Response was not in JSON format");
        }
    
        const data = await response.json();
        setPrediction(data.prediction);
        console.log("Prediciton received from model api: ")
        console.log(prediction)
        navigate('/result', { state: { prediction: data.prediction } });
      } catch (error) {
        console.error(error);
      }
    }
  // }

  return (
    <div className='font-montserrat'>

      {/* page 1 */}
      <div className={`${page === 0? "flex" : "hidden"} w-full h-screen px-4 md:px-8 flex-col bg-secondary justify-center md:pt-60 items-center space-y-4`}>
        <h1 className='font-black text-[32px] md:text-[44px] text-center text-white sm:w-1/2'>Welcome To DySign, The AI Screener</h1>
        <span className='flex justify-center items-center text-[30px] md:text-[36px]'  onClick={() => setpage(1)} >
          <div className='w-[32px] md:w-[38px] h-[32px] md:h-[38px] rounded-full bg-yellow animate-ping absolute cursor-pointer' />
          <FontAwesomeIcon icon={faArrowCircleRight} style={{color: "#ffc145"}} className='fa-2xl '/>
          {console.log(page)}
        </span>
      </div>
      {/* 
      <div className={`${page === 1? "flex" : "hidden"} w-full h-screen bg-secondary flex justify-center items-center`}>
        <div className='w-[32px] h-[32px] bg-yellow rounded-full page01-transition' />
      </div> */}

      {/* page 2 */}
      <div className={`${page === 1? "flex" : "hidden"} w-full h-screen flex-col bg-yellow max-sm:text-center`}>
        <img src={pg2_bg} className='bg-secondary absolute' />
        <div className='px-2 md:px-8 w-full h-full space-y-2 relative flex max-md:flex-col md:flex-wrap justify-end max-md:items-center pb-6 sm:pb-10'>

          {/* written instructions */}
          <div className='w-2/3 sm:w-1/2 flex flex-col justify-end'>
            <h1 className='font-black text-[32px] sm:text-[44px]'>Instructions</h1>
            <span className='flex max-sm:justify-center sm:text-[20px]'><p className='font-bold'>Time:</p><p>  ~5 - 10 mins</p></span>

            <p className='max-sm:text-center text-[14px] sm:text-[24px]'>Write the words well-spaced. Once the child is done, scan the sheets and upload them at the end of the activity. Whenever you are ready!</p>
            <p className='text-[10px] font-thin pt-10 px-2 sm:text-[16px]'>* DISCLAIMER: This screening test is still under development. The results are not accurate yet. Please refer to a clinical psychologist for official diagnosis. </p>
          </div>
          <div>
          </div>

          {/* paper pencil */}
          <div className='w-full md:w-1/2 flex flex-col justify-end items-center'>
            <p className='font-black text-[16px] sm:text-[24px]'>All you need is</p>
            <div className='flex flex-wrap w-full items-center space-x-3 justify-center text-[12px] sm:text-[20px]'>
              <p>1. An A4 size blank sheet.</p>
              <img src = {Paper} alt = "Paper" className='w-1/6 sm:w-32' />
            </div>

            <div className='flex flex-wrap w-full items-end space-x-3 justify-center text-[12px] sm:text-[20px]'>
              <img src = {Pencil} alt = "Pencil" className='w-1/4 sm:w-44' />
              <p>2. A dark pencil so the text is <br/> visible in the scans.</p>
            </div>
          </div>
        </div>
        
        <span className='flex justify-center items-center relative text-[30px] sm:text-[40px] sm:pb-20 pb-6 text-pink'  onClick={navtotest} >
          <div className='w-[38px] sm:w-[44px] h-[38px] sm:h-[44px] rounded-full bg-pink animate-ping absolute cursor-pointer' />
          <FontAwesomeIcon icon={faArrowCircleRight} style={{color: "#ff6b6c"}} className='fa-xl'/>
        </span>
        {/* <span className='flex justify-center items-center text-[30px] md:text-[36px]'  onClick={() => setpage(1)} >
          <div className='w-[32px] md:w-[38px] h-[32px] md:h-[38px] rounded-full bg-yellow animate-ping absolute cursor-pointer' />
          <FontAwesomeIcon icon={faArrowCircleRight} style={{color: "#ffc145"}} className='fa-2xl '/>
          {console.log(page)}
        </span> */}
      </div>
    </div>
  )
}

export default Instructions