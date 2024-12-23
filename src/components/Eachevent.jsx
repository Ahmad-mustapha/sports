import React from 'react'
import { Link } from 'react-router-dom'
import Racket from '../assets/racket.jpeg'

const eachEventData = [
    {id: 1, title: 'Padel Walk-In 18+ (Free play)', sport: 'RaketSportSchiedam', time: '2:00 - 3:00 PM', amount: '$7.50', spot: '1', available: true},
    {id: 2, title: 'Padel Walk-In 18+ (Free play)', sport: 'RaketSportSchiedam', time: '2:00 - 3:00 PM', amount: '$7.50', spot: '1', available: true},
    {id: 3, title: 'Padel Walk-In 18+ (Free play)', sport: 'RaketSportSchiedam', time: '2:00 - 3:00 PM', amount: '$7.50', spot: '1', available: true},
    {id: 4, title: 'Padel Walk-In 18+ (Free play)', sport: 'RaketSportSchiedam', time: '2:00 - 3:00 PM', amount: '$7.50', spot: '1', available: true},
    {id: 5, title: 'Padel Walk-In 18+ (Free play)', sport: 'RaketSportSchiedam', time: '2:00 - 3:00 PM', amount: '$7.50', spot: '1', available: true},
]


const Eachevent = () => {
  return (
    <ul className='flex flex-col gap-3'>
      {
        eachEventData.map((event, index) =>(
            <li key={index} className='h-32 bg-white shadow-lg rounded-lg'>
                <Link className='flex items-center justify-between gap-2 h-full'>
                    <div className='text-[white] h-full p-6 px-8 flex items-center justify-center bg-blue-800 rounded-l-lg'>
                        <span className='flex flex-col bg-orange-500 p-2 px-4 rounded-md font-[700]'><p className='text-[1.6rem]'>23</p><p className='text-[.9rem] text-slate-300'>DEC.</p></span>
                    </div>
                    <div>
                        <p className=''>{event.title}</p>
                        <p>RaketSportSchiedam</p>
                        <p>2:00 - 3:00 PM</p>
                    </div>
                    <div className='w-36 h-full rounded-r-lg'><img className='h-full w-full object-fill rounded-r-lg' src={Racket} alt="" /></div>
                </Link>
            </li>
        ))
      }
    </ul>
  )
}

export default Eachevent
