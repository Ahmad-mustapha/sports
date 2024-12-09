import React, { useState, useEffect } from 'react'
import './hero.css'
import Firstimage from '../../assets/sporthero2.webp'
import secimage from '../../assets/sporthero3.webp'
import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { IoMdTennisball } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import Jobs from '../jobs/Jobs';
import { SportsCarousel } from '../availableactivites/Sportcarousel';

function Hero() {

  const images = [
    Firstimage,
    secimage,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ selectedSport, setSelectedSport, ] = useState('tennis')
  // console.log(selectedSport);

  const handleSportChange = (sport) => {
    setSelectedSport(sport);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change background every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div>
      <div 
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
        className='py-6 px-8 md:px-14  hero-section'>
          <div><Link className='text-[3.4rem] font-[700] text-white cursor-pointer hero-content'>Search and book now</Link></div>
          <form action="">
            <div className='flex items-center flex-col lg:flex-row gap-8 mt-2 hero-content'>
                <div className='w-full lg:w-[350px]'>
                    <input
                    placeholder='Where' 
                    className='outline-none border-[1px] rounded-sm w-full p-4'
                    type="text" />
                </div>
                <div className='w-full lg:w-[350px]'>
                    <input
                    placeholder='Club name' 
                    className='outline-none border-[1px] rounded-sm w-full p-4'
                    type="text" />
                </div>
                {/* <div className='w-full lg:w-[350px]'> */}
                  <select className='w-full lg:w-[350px] outline-none border-[1px] rounded-sm p-4' name="" id="">
                    <option className='outline-none border-[1px] rounded-sm w-full p-4' value="indoorandoutdoor">Indoor and Outdoor</option>
                    <option className='outline-none border-[1px] rounded-sm w-full p-4' value="indoor">Indoor</option>
                    <option className='outline-none border-[1px] rounded-sm w-full p-4' value="outdoor">Outdoor</option>
                  </select>
                {/* </div> */}
                <div className='w-full lg:w-[350px] relative'>
                    <input
                    placeholder='' 
                    className='outline-none border-[1px] rounded-sm w-full pl-[1.7rem] p-4 date-input'
                    type="date" />
                    <button className='text-[white] text-[.8rem] absolute bottom-3 right-2 bg-orange-500 font-[500] rounded-[100px] p-1 px-2 flex items-center gap-1'>Search <FiSearch className='text-[.9rem] font-[600]'/></button>
                </div>
            </div>
          </form>
          {/* <div className='flex items-center flex-wrap justify-center md:justify-start md:flex-nowrap gap-1 hero-content mt-4'>
              <div className='flex items-center flex-wrap gap-1'>
                <span className='flex items-center gap-1'><IoMdTennisball className='text-[#d94b18] text-[1.4rem]'/><button 
                  onClick={(e) =>handleSportChange('tennis')}
                  className='buttons'> Tennis</button></span>
                  <button
                  onClick={(e) =>handleSportChange('padel')} 
                  className='buttons'>Padel</button>
                  <button
                  onClick={(e) =>handleSportChange('squash')} 
                  className='buttons'>Squash</button>
                  <button
                  onClick={(e) =>handleSportChange('pickleball')} 
                  className='buttons'>Pickleball</button>
                </div>
              <div className='flex items-center flex-wrap gap-1'>
                  <span className='flex items-center gap-1'
                  onClick={(e) =>handleSportChange('inAndOut')}lassName='flex items-center gap-1'><FaHome className='text-[#d94b18] text-[1.4rem]'/><button 
                  className='buttons'> Indoor and outdoor</button></span>
                  <button
                  onClick={(e) =>handleSportChange('indoor')} 
                  className='buttons'>Indoor</button>
                  <button
                  onClick={(e) =>handleSportChange('outdoor')} 
                  className='buttons'>Outdoor</button>
              </div>
          </div> */}
      </div>
      <section className=''>
        <Jobs />
      </section>
      <section className='bg-[#f5f5f5] px-14 py-6 overflow-x-hidden mt-10'>
        <div className="">
          <p className="font-[500] text-[2rem]">Available activities from Saturday 7 December </p>
        </div>
        <div className="mt-8">
          <SportsCarousel selectedSport={selectedSport}/>
        </div>
      </section>
    </div>
  )
}

export default Hero
