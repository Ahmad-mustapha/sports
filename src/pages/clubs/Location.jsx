import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const allLocations = [
    {id: 1, name: 'HTC Hillegom', address: 'Stationsweg 29 / 31, 2182 BA Hillegom'},
    {id: 2, name: 'HTC Hillegom', address: 'Stationsweg 29 / 31, 2182 BA Hillegom'},
    {id: 3, name: 'HTC Hillegom', address: 'Stationsweg 29 / 31, 2182 BA Hillegom'},
    {id: 4, name: 'HTC Hillegom', address: 'Stationsweg 29 / 31, 2182 BA Hillegom'},
    {id: 5, name: 'HTC Hillegom', address: 'Stationsweg 29 / 31, 2182 BA Hillegom'}
]

const Location = () => {
  return (
    <ul className='flex flex-col gap-2'>
        {allLocations.map((location, index) =>(
            <li className='flex flex-col gap-2 p-2 bg-white' key={index}>
                <p className='text-[1.4rem] font-[600]'>{location.name}</p>
                <p className='text-[.9rem]'>{location.address}</p>
               <div className='flex items-start'> <Link to={`/clubs/${location.id}`} className='flex items-center gap-1 bg-blue-800 p-2 rounded-[100px] text-white text-[.9rem] font-[500]'>Books <FaArrowRight /></Link></div>
            </li>
        ))}
    </ul>
  )
}

export default Location
