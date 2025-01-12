import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import './header.css'


const Adminheader = ({ headerText }) => {
    const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="header static lg:ml-[300px] flex h-[5rem] flex-grow items-start md:items-start lg:items-center justify-between p-[1rem] border-[#CECFDA] border-b-[1px]">
      <div>
        <p className={`text-[1.3rem] font-[600] text-gray-700`}>{headerText}</p>
      </div>
      <div className="headerText flex   items-center space-x-0 md:space-x-4 flex-wrap  ">
        <div className="accBalance flex pb-5 lg:pb-0 items-center lg:space-x-4 text-[1rem] font-[400]">
          <p className="text-[.95rem] font-[700] md:font-[600] font-bold md:font-semibold">Wallet balance: NGN 5,000</p>
          <Link to="#">
            <p className="z-0 text-[.9rem] py-[.3rem] px-[.5rem] bg-[#1AA34A] rounded-[4px] text-white">
              Top up +
            </p>
          </Link>
        </div>
        <Link className="cartIcon" to="./cart">
          <div className="relative -z-10">
            <span className="cartNum">g</span>
            <BsCart3 className="text-[1.4rem]" />
          </div>
        </Link>
        <div className="relative">
          <div
            className="user hidden md:hidden lg:flex items-center space-x-1 cursor-pointer"
            // onClick={toggleDropdown}
          >
            <p className="font-[500] text-[.95rem] ">Email</p>
            <IoIosArrowDown />
          </div>
          {/* {showDropdown && (
            <div className="dropdown-menu absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-[1000]">
              <Link
                to=""
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
              >
                Profile
              </Link>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-150"
              >
                Logout
              </button>
            </div>
          )} */}
        </div>
      </div>
    </div>
  )
}

export default Adminheader