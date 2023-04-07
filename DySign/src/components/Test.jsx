import React from 'react'
import { words } from '../constants'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import * as tf from '@tensorflow/tfjs';
import * as tf from '@tensorflow/tfjs';

const Test = () => {

  //variables
  const [ind, setind] = useState(0);
  const navigate = useNavigate();

  //functions
  // const navtoupload = () => {
  //   navigate('/Upload')
  // }
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
    <div className={`w-screen h-screen font-roboto flex flex-col justify-center ${ind%2 === 0? "bg-salmon" : "bg-cinerous"}`}>

      {/* Word Display Block */}
      <div className={`${ind < words.length - 1 ? "flex" : "hidden"} flex-col w-full items-center`}>
        <p className='text-[50px] font-bold text-white'>{words[ind].word}</p>
        <div className={`w-1/4 h-[40px] rounded-3xl cursor-pointer text-center pt-2 ${ind%2 === 0? "bg-flame text-white" : "bg-almond text-cinerous"}`} onClick={() => setind(ind+1)}>Next</div>
        {console.log(ind)}
      </div>

      {/* Upload Screen Block */}
      <div className={`${ind === words.length - 1 ? "flex" : "hidden"} bg-flame h-full justify-center flex-col items-center font-roboto font-bold`}>
        <p className='text-[20px] text-white text-center p-5'>Wohoo! <br /> You Reached The End! <br /> Now Upload What You Wrote</p>
        
        <div className='w-[380px] h-[100px]'>
        <input type="file" onChange={handleFileChange} />
        <button className='w-[380px] h-[100px] bg-black rounded-full font-montserrat font-bold text-primary text-[50px] text-center py-[10px] cursor-pointer' onClick={handleSubmit}>Upload</button>
      </div>
      </div>
    </div>
  )
}

export default Test