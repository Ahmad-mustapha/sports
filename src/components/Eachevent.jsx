import { link } from 'fs'
import React from 'react'
import { Link } from 'react-router-dom'

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
        eachEventData.map((event, index) =>{
            <li key={index}>
                <Link>
                    <div className='text-blue-800 p-6 flex items-center justify-center'>
                        <span className='flex flex-col bg-orange-500 p-2 rounded-md'><p>23</p><p>DEC.</p></span>
                    </div>
                    <div>
                        <p>Padel Walk-In 18+ (Free play)</p>
                        <p>RaketSportSchiedam</p>
                        <p>2:00 - 3:00 PM</p>
                    </div>
                    <div>

                    </div>
                </Link>
            </li>
        })
      }
    </ul>
  )
}

export default Eachevent
