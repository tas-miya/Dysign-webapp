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
    const [result, setResult] = useState(null);
  
    // const navigate = useNavigate();
  
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      // Load the trained TensorFlow.js model
      const model = await tf.loadLayersModel('./dysignIncModel.h5');
  
      // Preprocess the uploaded image
      const image = await preprocessImage(selectedFile);
  
      // Make predictions using the loaded model
      const predictions = await model.predict(image).data();
  
      // Display the result to the user
      setResult({ prediction: predictions.map(p => (p * 100) + '%') });
  
      // Navigate to Result component and pass predicted value
      navigate('/Result', { state: { prediction: predictions.map(p => (p * 100) + '%') } });
    };
  
    const preprocessImage = async (file) => {
      const image = document.createElement('img');
      const reader = new FileReader();
  
      return new Promise((resolve, reject) => {
        reader.onload = () => {
          image.onload = () => {
            const tensor = tf.browser.fromPixels(image)
              .resizeNearestNeighbor([150, 150])
              .expandDims()
              .toFloat()
              .div(255);
            resolve(tensor);
          };
          image.src = reader.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    };
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
        
        <form onSubmit={handleSubmit} className='flex items-center space-x-6 flex-col justify-center'>
          <input type = "file" onChange={handleFileChange} className='' />
          <button className='w-1/4 h-[40px] bg-almond rounded-3xl cursor-pointer text-center pt-2 text-flame' type="submit">Upload</button>
        </form>
      </div>
    </div>
  )
}

export default Test