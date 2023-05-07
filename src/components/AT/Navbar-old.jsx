import { useState } from 'react'
import {header, menu, logo} from "../assets"
import { navlinks } from '../constants'

const Navbar = () => {

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <div className='w-screen flex sm:mb-10 mb-4 relative'>

      {/* bg */}
      <div className='w-screen h-[360px] absolute  bg-navbar-header bg-fixed bg-no-repeat sm:bg-auto bg-250 bg-right-top overflow-hidden' />

      {/* logo & menu */}
      <div className={`${!toggle? "hidden":"bg-cinerous opacity-70 w-screen h-screen absolute"}`} onClick={()=>setToggle(!toggle)}/>

      <div className='flex sm:px-[50px] p-[20px] z-50 w-screen sm:h-[100px] lg:h-[120px] justify-between items-center'>
           <img src = {logo} alt = 'header' className={`w-[83px] lg:w-[124px] ${toggle? "opacity-40" : "opacity-100"}`}/>
   
           <img 
           src = {menu} 
           alt = 'menu' 
           className={`${toggle ? "rotate-90": ""} w-[20px] lg:w-[25px]`}
           onClick={() => setToggle(!toggle)}/>


           <div className={`${!toggle? "hidden" : "flex"} p-6 bg-almond absolute top-20 right-0 mx-4 my-2 min-w-[200px] min-h-[250px]  rounded-xl`}>
            
            <ul className='list-none flex justify-center items-center flex-1 flex-col'>
              {navlinks.map((nav, index) => (
                <li
                  key = {nav.id}
                  onClick = {() => setActive(nav.title)}>
                  <a href = {`${nav.id}`} className={`font-roboto cursor-pointer text-[16px] leading-loose text-center ${active === nav.title? " text-salmon font-bold":"text-cinerous"} ${index === navlinks.length -1? "mb-0" : "mb-4"}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
           </div>
       </div>

    </div>
  )
}

export default Navbar