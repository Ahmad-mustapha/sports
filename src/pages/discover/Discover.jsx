import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Firstimage from '../../assets/sporthero2.webp'
import secimage from '../../assets/sporthero3.webp'
import { IoMdTennisball } from 'react-icons/io'
import { Mainheader, Eachevent, Meetandplay, Tennisandpadelinfo, Meetandplayapp } from '../../components'
import Map from '../../assets/dummymap.png'

const Discover = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        Firstimage,
        secimage,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change background every 2 seconds
    
        return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);

  return (
    <div>
      <Mainheader />
      <section 
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
        className='py-6 px-8 md:px-14 hero-section'>
          <div><Link to='/' className='text-[2.8rem] md:text-[3.4rem] font-[700] text-white cursor-pointer hero-content'>DISCOVER TENNIS OR PADEL</Link></div>
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
                  {/* <select className='w-full lg:w-[350px] outline-none border-[1px] rounded-sm p-4' name="" id="">
                    <option className='outline-none border-[1px] rounded-sm w-full p-4' value="indoorandoutdoor">Indoor and Outdoor</option>
                    <option className='outline-none border-[1px] rounded-sm w-full p-4' value="indoor">Indoor</option>
                    <option className='outline-none border-[1px] rounded-sm w-full p-4' value="outdoor">Outdoor</option>
                  </select> */}
                {/* <div className='w-full lg:w-[350px] relative'>
                    <input
                    placeholder='' 
                    className='outline-none border-[1px] rounded-sm w-full pl-[1.7rem] p-4 date-input'
                    type="date" />
                    <button className='text-[white] text-[.8rem] absolute bottom-3 right-2 bg-orange-500 font-[500] rounded-[100px] p-1 px-2 flex items-center gap-1'>Search <FiSearch className='text-[.9rem] font-[600]'/></button>
                </div> */}
            </div>
          </form>
          <div className='flex items-center justify-center sm:justify-start flex-wrap gap-2 hero-content my-6'>
            <button 
            onClick={() =>('tennis')}
            className='buttons'><IoMdTennisball className='text-[#d94b18] text-[1.2rem]'/> Tennis</button>
            <button
            onClick={() =>('padel')} 
            className='buttons'> Padel</button>
            <button
            onClick={() =>('squash')} 
            className='buttons'>Squash</button>
            <button
            onClick={() =>('pickleball')} 
            className='buttons'>Pickleball</button>
            </div>
      </section>
      <section className="p-4 flex items-center flex-wrap md:flex-nowrap">
            <section className="bg-[#eeeeee] p-4 w-full md:w-3/6 h-[400px] overflow-y-scroll">
                <Eachevent />
            </section>
            <section className="w-full md:w-3/6 h-[400px] ">
                <img src={Map} alt="" className="w-full h-full"/>
            </section>
      </section>
      <section className=''>
        <Meetandplay />
      </section>
      <section className='py-6 px-4 md:px-10'>
        <Tennisandpadelinfo />
      </section>
      <section>
        <Meetandplayapp />
      </section>
    </div>
  )
}

export default Discover
