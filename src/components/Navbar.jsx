import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { logo } from '../assets'
import { navlinks } from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  const [toggle, settoggle] = useState(0);
  const [active, setactive] = useState('/')
  const navigate = useNavigate()

  const navtohome = () => {
    navigate('/')
  };
  const handlenav = () => {
    setactive(nav.id);
    navigate('/'+nav.id)
  }


  return (
    <nav id = 'navbar' className={`sm:h-40 z-10 w-full absolute flex justify-between  px-4 sm:px-8 font-montserrat ${toggle? "max-ss:h-screen max-ss:bg-yellow max-ss:bg-opacity-30 max-ss:items-start max-ss:pt-6" : "h-20 items-center"}`} onClick={() => settoggle(!toggle)}>
        <img src={logo} className='cursor-pointer w-1/5 md:w-40' onClick={navtohome} />

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navlinks.map((nav, index) => (
          <li
            key={nav.id}
            onClick={() => setactive(handlenav)}
          >
            <a href={`/${nav.id}`} className={`font-bold cursor-pointer text-[16px] ${
              active === nav.id ? "text-orange" : "text-secondary"
            } ${index === navlinks.length - 1 ? "mr-0" : "mr-10"}`}>{nav.title}</a>
          </li>
        ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
        <FontAwesomeIcon icon = {faBars} style={{color: "#5b5f97"}} className={`fa-md ${toggle ? 'rotate-90' : 'rotate-0'}`} onClick={() => settoggle(!toggle)} />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-yellow absolute top-20 right-0 mx-4 my-2 w-1/2 h-44 rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-center items-center flex-1 flex-col">
            {navlinks.map((nav, index) => (
              <li
                key={nav.id}
                onClick={() => setactive(nav.id)}
              >
                <a href={`${nav.id}`} className={`font-bold cursor-pointer text-[14px] ${
                  active === nav.id ? "text-white" : "text-secondary"
                } ${index === navlinks.length - 1 ? "mb-0" : "mb-4"}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar