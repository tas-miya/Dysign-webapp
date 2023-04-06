import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Navbar, Hero, Test, Contributors, Home, Result} from './components'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element={<Home />} />
          <Route path = "/test" element = {<Test />} />
          <Route path = "/result" element = {<Result />} />
        </Routes>
      </BrowserRouter>
      
      {/* <div className='w-screen h-screen'>
        <Test />
      </div> */}
    </div>
  )
}

export default App