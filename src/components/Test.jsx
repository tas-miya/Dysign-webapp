import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ready_circles } from '../assets';
import { words } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight, faXmark } from '@fortawesome/free-solid-svg-icons'

const Test = () => {

    // page 3 variables
  const [readyActive, setReadyActive] = useState(true);
  const [page, setpage] = useState(2);
  const [ind, setind] = useState(0);
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);

  
  setTimeout(() => {
    setReadyActive(false);
    console.log('ready ', readyActive)
  }, 5000);

  setTimeout(() => {
    setpage(3);
    console.log(page)
  }, 9000);

  const navtohome = () => {
    navigate("/")
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    try {
      const response = await fetch('https://flask-production-2c96.up.railway.app/predict', {
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
  };

  return (
    <div className='font-montserrat'>
        {/* page 3 */}
      <div className={`${page === 2? "flex" : "hidden"} w-full h-screen bg-white`}>
      
        <div className='w-screen h-screen bg-white text-black py-[50px] overflow-hidden'>
        <img
        src={ready_circles}
        alt='circles'
        className='absolute right-4' />
        {
          readyActive === true &&
          <div className='special-bounce w-screen h-screen flex justify-center items-center text-[44px] md:text-[150px] font-black'>
            Ready?
          </div>
        }
        {
          readyActive === false && 
          <div className='text-bounce-in w-screen h-screen flex justify-center items-center text-[44px] md:text-[150px] font-black'>
            Let's Go!
          </div>
        }
        </div>
    </div>

    {/* page 4 */}
    <div className={`${page === 3? "flex" : "hidden"} ${ind%3 === 0? "bg-pink" : "bg-secondary"} w-screen h-screen text-bounce-in text-white flex-col`}>

        <div className={`w-full flex justify-end px-4 sm:px-8 pt-4 sm:pt-8 text-[36px] ${ind === words.length -1 && page === 3 ? "bg-yellow" : "bg-transparent"}`}>
            <FontAwesomeIcon icon={faXmark} style={{color: "#fffffb"}} onClick={navtohome} className='cursor-pointer' />
        </div>

        <div className='flex flex-col justify-center w-full h-screen'>
            <div className={`${ind < words.length - 1 && page === 3 ? "flex" : "hidden"} flex-col w-full items-center px-4 sm:px-8`}>
            <h1 className='font-black text-[16px]'>Task</h1>

            <p className={`${ind === 0? "text-[32px] sm:text-[40px] md:w-1/2" : "text-[40px] sm:text-[72px]"} font-black text-white text-center`}>{words[ind].word}</p>

            <span className={`flex w-full ${ind === 0? "justify-end" : " justify-between"} items-end text-[24px] sm:text-[48px]`} >

            <FontAwesomeIcon icon={faArrowCircleLeft} style = {{color: "#fffffb"}} className={`${ind > 0? "" : "hidden"} fa-xl cursor-pointer`} onClick={() => setind(ind - 1)} />
            <FontAwesomeIcon icon={faArrowCircleRight} style={{color: "#fffffb"}} className={`fa-xl cursor-pointer`} onClick={() => setind(ind + 1)}/>
            </span>
            {console.log(ind)}
        </div>
        
        {/* Upload Screen Block */}
      <div className={`${ind === words.length -1 && page === 3 ? "flex" : "hidden"} bg-yellow h-full justify-center flex-col items-center font-bold`}>
        <p className='text-[24px] md:text-[32px] text-black text-center p-5'>Wohoo! <br /> You Reached The End! <br /> Now Upload What You Wrote</p>
        
        <div className='w-full h-1/4 flex flex-col items-center px-3'>
        <input 
        type="file" 
        onChange={handleFileChange} 
        className='block text-sm text-black
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-black
        hover:file:bg-violet-100'/>
        <br />
        <button className='w-1/2 sm:w-1/4 h-[50px] bg-black rounded-3xl font-roboto font-bold text-white text-[20px] text-center py-2 cursor-pointer' onClick={handleSubmit}>Upload</button>
      </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Test