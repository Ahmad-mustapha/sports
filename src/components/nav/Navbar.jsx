import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiTennisRacket } from "react-icons/gi";
import { BiSolidTennisBall } from "react-icons/bi";
import './navbar.css'
const navLinks = [
    {text: 'Tennis', icon: <BiSolidTennisBall />, link: '/tennis'},
    {text: 'Padel', icon: <GiTennisRacket />, link: '/padel'},
    {text: 'Pickleball', icon: <GiTennisRacket />, link: '/pickleball'},
    {text: 'Associations', icon: '', link: '/association'},
    {text: 'Centers', icon: '', link: '/centers'},
    {text: 'Teachers', icon: '', link: '/teachers'},
]

const sports = [
    {text: 'KNLTB', icon: '', link: '/knltb'},
    {text: 'Tennis', icon: <GiTennisRacket />, link: '/tennis'},
    {text: 'Padel', icon: <GiTennisRacket />, link: '/padel'},
    {text: 'Pickleball', icon: <GiTennisRacket />, link: '/pickleball'},
    {text: 'Associations', icon: <GiTennisRacket />, link: '/association'},
    {text: 'Centers', icon: <GiTennisRacket />, link: '/centers'},
    {text: 'Teachers', icon: <GiTennisRacket />, link: '/teachers'},
    {text: 'KNLTB TV', icon: <GiTennisRacket />, link: '/knltb tv'},
]

// export const Moresports = () =>{
//     return(
//         <ul className='p-6 rounded-lg absolute top-20 right-96 grid grid-cols-3 gap-4 bg-[#f1f1f1] z-30'>
//             {sports.map((sport, index) => (
//                 <li key={index} className='hover text-[.94rem] p-2'>
//                     <Link to={sport.link} className="flex items-center gap-2">
//                         {sport.icon ? (
//                             <span className="text-[1.2rem] font-[600]">{sport.icon}</span>
//                         ) : sport.src ? (
//                             <img
//                                 src={sport.src}
//                                 alt={sport.text}
//                                 className="w-6 h-6 object-cover"
//                             />
//                         ) : null}
//                         {sport.text}
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     )
// }


const Navbar = () => {
    // const [ showMoresports, setShowMoreSport ] = useState(false)
  return (
    <div className='navbar'>
        <ul className='flex items-center gap-[5px] text-white'>
            {navLinks.map((link, index) =>(
                <li key={index} className='hover text-[.94rem] p-2'>
                    <Link className='flex items-center gap-1'><span className='text-[1.2rem] font-[600]'>{link.icon}</span>{link.text}</Link>
                </li>
            ))}
            {/* <button
            onClick={() => setShowMoreSport(!showMoresports)}
            className='font-[500] flex items-center gap-1'>More <IoIosArrowDown /></button> */}
        </ul>
        {/* {showMoresports && (
            <Moresports />
        )} */}
        {/* <div className='flex items-center gap-[5px] text-white'>
            <Link className='flex items-center gap-1 hover text-[.94rem] p-2'>TennisDirect <HiOutlineShoppingCart className='text-[1.1rem] font-[600]'/></Link>
            <Link className='flex items-center gap-1 hover text-[.94rem] p-2'>My KNLTB<MdOutlinePersonOutline className='text-[1.1rem] font-[600]'/></Link>
            <Link><FiSearch /></Link>
        </div> */}
    </div>
  )
}

export default Navbar
