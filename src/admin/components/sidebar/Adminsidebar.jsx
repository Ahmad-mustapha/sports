import React, { useState } from 'react';
import './sidebar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoMenuOutline } from "react-icons/io5";
import { MdOutlineClose } from 'react-icons/md';
import { BsCart3 } from "react-icons/bs";
import { Audio } from 'react-loader-spinner';


const Adminsidebar = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const navbar = [
    { id: 1, text: 'Upcoming matches', link: '/admin' },
    { id: 2, text: 'Upcoming Tournaments', link: '/Domainlist' },
    { id: 3, text: 'Calender', link: '/Expired' },
    { id: 4, text: 'History', link: '/Sslcertificate' },
  ];

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };
  return (
    <>
      {loading && (
        <div className="loader-overlay">
          <Audio
            height="100"
            width="100"
            color="#FF7D01"
            ariaLabel="audio-loading"
            visible={true}
          />
        </div>
      )}
      <nav className={`allNav lg:h-screen h-[5rem]`}>
        <div className="logo flex item-center justify-center">
          <Link to="/"><img src={`Logo`} alt="Logo" /></Link>
        </div>
        <div className='menu lg:hidden flex flex-row justify-end items-end'>
          <div className='flex items-center space-x-4'>
            <Link to='/cart'>
              <div className='relative'>
                <span className='cartNum'>12</span>
                <BsCart3 className='text-[1.4rem]' />
              </div>
            </Link>
            {!openMenu ? 
              <IoMenuOutline className='text-[2rem] cursor-pointer' onClick={() => setOpenMenu(true)} /> 
              : <MdOutlineClose className='text-[2rem] cursor-pointer' onClick={() => setOpenMenu(false)} />
            }
          </div>
        </div>
        <div onClick={() => setOpenMenu(false)} className={`${openMenu ? 'overlay' : 'hidden'}`}></div>
        <ul className={`lg:flex lg:flex-col space-y-7 ${openMenu ? 'show' : 'hidden'}`}>
          {navbar.map((nav) => (
            <li key={nav.id} className={`text-[.9rem] py-2 pl-[1.3rem] cursor-pointer rounded-3x ${nav.text === 'Logout' ? 'text-red-500' : 'text-gray-500'} ${location.pathname === nav.link ? 'bg-orange-500 rounded-full text-white' : ''}`}>
              {nav.text === 'Logout' ? 
                <span onClick={handleLogoutClick} className='font-bold'>{nav.text}</span> 
                : <Link onClick={() => setOpenMenu(false)} to={nav.link} className='font-semibold'>{nav.text}</Link>
              }  
            </li>
          ))}
        </ul>
      </nav>
        
    </>
  )
}

export default Adminsidebar