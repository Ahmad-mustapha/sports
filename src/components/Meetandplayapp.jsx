import React from 'react'
import Map from '../assets/dummymap.png'
import Appstorebadge from '../assets/appstorebadge.svg'
// import Googlebadge from '../assets/googlebadge.svg'
const Meetandplayapp = () => {
  return (
    <div className='flex items-center justify-between py-6 px-4 md:px-10 text-[#222]'>
      <div className='w-full md:w-3/6'><img src={Map} alt="" /></div>
      <div className='w-full md:w-3/6 flex flex-col gap-4'>
        <p className='text-[2.3rem] font-[800]'>MEET & PLAY APP</p>
        <p>Discover a job or activity at a club near you even faster? Book and pay easily?</p>
        <p><strong>Download the Meet & Play App now</strong> and become part of the tennis and padel platform of the Netherlands.</p>
        <span>
            <Link><img src={Appstorebadge} alt="" /></Link>
            <Link><img src={Googlebadge} alt="" /></Link>
        </span>
      </div>
    </div>
  )
}

export default Meetandplayapp
