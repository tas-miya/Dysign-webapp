import React from 'react'
import {BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import {Test, Home, Result, Instructions, Learn, Aboutus} from './components'
// import Home from './components/AT/Home'
import { bg } from './assets'

const App = () => {
  const location = useLocation();
  return (
    <div className='w-screen overflow-hidden bg-white'>
        <Routes>
          <Route exact path = "/" element={<Home />} />
          <Route path = "/instructions" element={<Instructions />} />
          <Route path = "/test" element = {<Test />} />
          <Route path = "/result" element={<Result location={location} />} />
          <Route path = "/learn" element={<Learn />} />
          <Route path = "/aboutus" element={<Aboutus />} />
          {/* <Route exact path='/game' render={() => window.location.href='./components/game.html'} /> */}
        </Routes>
      
      {/* <div className='w-screen h-screen'>
        <Test />
      </div> */}
    </div>
  )
}

export default App