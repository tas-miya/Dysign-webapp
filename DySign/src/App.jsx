import React from 'react'
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import {Navbar, Hero, Test, Contributors, Home, Result} from './components'

const App = () => {
  const location = useLocation();
  return (
    <div className='overflow-hidden'>
        <Routes>
          <Route exact path = "/" element={<Home />} />
          <Route path = "/test" element = {<Test />} />
          <Route path = "/result" element={<Result location={location} />} />
        </Routes>
      
      {/* <div className='w-screen h-screen'>
        <Test />
      </div> */}
    </div>
  )
}

export default App