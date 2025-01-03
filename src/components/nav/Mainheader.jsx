import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundForward } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { IoMenuOutline } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { TbWorld } from 'react-icons/tb';
import Logo2 from '../../assets/sportlogo2.svg'
import Logo3 from '../../assets/knltbid_logo.png'
import { FiSearch } from 'react-icons/fi';
import { IoIosArrowDown } from "react-icons/io";
import { BiSolidTennisBall } from "react-icons/bi";
import { GiTennisRacket } from 'react-icons/gi';
import { MdLiveTv } from 'react-icons/md';
import LoginSignup from '../loginandsignup/LoginSignup';
import './navbar.css'

const navLinks = [
  {text: 'KNLTB', icon: '', link: '/knltb'},
  {text: 'Tennis', icon: <BiSolidTennisBall />, link: '/tennis'},
  {text: 'Padel', icon: <GiTennisRacket />, link: '/padel'},
  {text: 'Pickleball', icon: <GiTennisRacket />, link: '/pickleball'},
  {text: 'Associations', icon: '', link: '/association'},
  {text: 'Centers', icon: '', link: '/centers'},
  {text: 'Teachers', icon: '', link: '/teachers'},
  // {text: 'KNLTB TV', icon: <MdLiveTv />, link: '/knltb tv'},
]

// export const SidebarNenu = () =>{
//   return(
//     <div>
//       <ul className='w-full bg-[#19328A] absolute top-[rem] left-0 h-[] flex flex-col justify-start gap-2 text-white z-50'>
//             {navLinks to='/clubs'.map((link, index) =>(
//                 // <li  className=''>
//                 <Link key={index} className='flex items-center gap-1 text-[.94rem] p-4 sidelink'><span className='text-[1.2rem] font-[600]'>{link.icon}</span>{link.text}</Link>
//                 // </li>
//             ))}
//         </ul>
//     </div>
//   )
// }

export const SideheaderMenu = ({ setShowMenu }) =>{
  const [ showSidebar, setShowSidebar ] = useState(false)
  const [ showSignup, setShowSignup ] = useState(false)
  useEffect(() => {
    if (showSignup) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showSignup]);
  const handleSidebar = () =>{
    setShowSidebar(!showSidebar)
  }
  return(
    <div>
      <ul className='sideheaderNav w-full bg-white fixed top-[4.5rem] left-0 h-screen flex flex-col justify-start gap-6 text-black z-40 overflow-y-scroll'>
        {/* <div onClick={handleSidebar} className='flex cursor-pointer items-center justify-between bg-[#19328A] px-2 py-4 text-white -mt-4 -mx-4 -mb-6 border-b-[1px] border-[#bbb]'>
          <p className='font-[700] text-[1rem]'>KNLTB Meet & Play</p>
          <IoIosArrowDown className='cursor-pointer' onClick={handleSidebar}/>
        </div>
        {
          showSidebar && (
            <SidebarNenu />
          )
        } */}
        
        <Link to='/' className='hover:underline hover:text-orange-500 sidelink'>Explanation</Link>
        <Link to='/discover' className='hover:underline hover:text-orange-500 sidelink'>Discover</Link>
        <Link className='hover:underline hover:text-orange-500 sidelink'>To play</Link>
        <Link to='/download' className='hover:underline hover:text-orange-500 sidelink'>Download</Link>
        <Link to='/clubs' className='hover:underline hover:text-orange-500 sidelink'>Map of facilities</Link>
        <Link to='/news' className='hover:underline hover:text-orange-500 sidelink'>News</Link>
        <div className='mb-20 flex items-center justify-end gap-4'>
        <button 
        onClick={() => setShowSignup(true)}
        className='text-[white] bg-[#19328A] font-[500] rounded-[100px] p-2 px-4 flex items-center gap-1'>Sign Up</button>
        </div>
      </ul>
      {
        showSignup && (
          <LoginSignup showSignup={showSignup} setShowSignup={setShowSignup}/>
        )
      }
    </div>
  )
}


const Mainheader = () => {
  const [ showMenu, setShowMenu ] = useState(false)
  const [ showSignup, setShowSignup ] = useState(false)
  useEffect(() => {
    if (showMenu, showSignup) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showMenu, showSignup]);

  return (
    <div className='mainheader border-b-[] border-[#ccc]'>
      <div className='flex items-center md:gap-2 xl:gap-10'>
        <div className='mr-6'><Link to='/'><img src={Logo2} alt="" /></Link></div>
        <ul className='mainheaderNav'>
          <li><Link to='/'>Explanation</Link></li>
          <li><Link to='/discover'>Discover</Link></li>
          <li><Link>To play</Link></li>
          <li><Link to='/download'>Download</Link> </li>
          <li><Link to='/clubs'>Map of facilities</Link></li>
          <li><Link to='/news'>News</Link></li>
        </ul>
      </div>
      <div className='flex items-center gap-4 login'>
        <div className='flex items-center gap-[5px] text-white'>
        <button 
        onClick={() => setShowSignup(true)}
        className='text-[white] bg-[#19328A] font-[500] rounded-[100px] p-2 px-4 flex items-center gap-1'>Sign Up</button>
        <span className='shadow-xl border-[1px] border-[#aaa] rounded-full p-[.4rem] '> <TbWorld  className='text-[1.5rem] font-[600] media'/></span>
        <Link className='shadow-xl border-[1px] border-[#aaa] rounded-full p-[.4rem] '><MdOutlinePersonOutline className='text-[1.5rem] font-[600] media'/></Link>
      </div>
      </div>
      <div className='menu text-black absolute right-6'>
        {showMenu ? <RxCross1 
        onClick={() => setShowMenu(false)}
        className='text-[2rem] cursor-pointer'/>: 
        <IoMenuOutline 
        onClick={() => setShowMenu(true)}
        className='text-[1.9rem] cursor-pointer'/>}
      </div>
      { showMenu && (
        <SideheaderMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
      ) }


      {
        showSignup && (
          <LoginSignup showSignup={showSignup} setShowSignup={setShowSignup}/>
        )
      }
      {/* <Link><FiSearch className='text-orange-500 mr-8 font-[500] text-[1.2rem]'/></Link> */}
    </div>
  )
}

export default Mainheader
