import React, { useState } from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import { Mainheader, Footer, Usefullinks, Partners } from '../../components'
import { EachJobs } from '../clubs/Clubdetails'
import { Link } from 'react-router-dom'
import Dummymap from '../../assets/dummymap.png'
import { EacheventActivities } from '../../components/Eachevent'

const Activities = () => {
    const { id } = useParams()
    const { state } = useLocation()

    const [ activeTime, setActiveTime ] = useState(false)
  return (
    <div>
      <Mainheader />
      <div className='flex pt-4 mt-4 px-8 md:px-14 gap-4'>
        <Link className='hover:underline hover:text-orange-500' to='/'>Meet and Play</Link>
        <Link className='hover:underline hover:text-orange-500' to='/clubs'>Clubs</Link>
        <p className='text-orange-500'>{state.title}</p>
      </div>

      <section className='py-6 px-8 md:px-14 flex flex-wrap md:flex-nowrap gap-6 mb-6'>
        <aside className='w-full md:w-4/6'>
            <h1 className='text-[3rem] font-[800] text-[#262727]'>{state.title}</h1>
            <div className='flex items-center gap-2'>
                <NavLink
                to={`/clubs/${id}`}  
                end
                state={{ title: state.title, image: state.image }}
                className={({ isActive }) => `text-[1.7rem] text-[#262727] font-extrabold border-[2px] rounded-md border-orange-500 p-1 ${isActive ? 'bg-orange-500': ''}`}>JOBS</NavLink>
                <NavLink 
                to={`/clubs/${id}/activities`}
                state={{ title: state.title, image: state.image }}
                className={({ isActive }) => `text-[1.7rem] text-[#262727] font-extrabold border-[2px] rounded-md border-orange-500 p-1 ${isActive ? 'bg-orange-600': ''}`}>ACTIVITES</NavLink>
            </div>
            <section className="flex items-center justify-center sm:justify-start gap-6 flex-wrap text-[#4c535a] bg-[#193291] rounded-md p-6">
                <div className="w-full sm:w-[160px]">
                    <label className="text-[#dae1e3] text-[.9rem] font-[600]" htmlFor="">From when</label> <br />
                    <input 
                    placeholder="12/04/2000"
                    className="outline-none rounded-[100px] p-2 w-full"
                    type="date" />
                </div>
            </section>
            <div className='mt-6'>
                <EacheventActivities />
            </div>
        </aside>
        <aside className='w-full md:w-2/6'>
            <div className='rounded-lg bg-[#193291] py-8 px-10 text-white'>
                <p className='font-[600] text-[1.7rem]'>Visiting address</p>
                <p className='text-[1rem] my-4 font-[500]'>Potjesdam 4, 1722 XN SOUTH <br /> SCHARWOUDE</p>
                <img className='h-40 w-full' src={Dummymap} alt="" />
            </div>
            <div className='mt-4 w-full'>
                <p className='text-[1.2rem] font-[700]'>Club Details</p>
                <div className='bg-white w-full'><img className='w-full' src={state.image} alt="" /></div>
                <div>
                    <p className='text-[.95rem] font-[700]'>Contact</p>
                    <p>+31 513 632 363</p>
                    <p>info@plantwee.nl</p>
                    <Link>www.plantwee.nl</Link>
                </div>
                <div className='mt-6'>
                    <p className='text-[.95rem] font-[700]'>Accommodation</p>
                    <p><strong>Facilities:</strong> There is a canteen for a delicious cup of coffee or something else to eat, you can also use the toilets and showers there.</p>
                </div>
            </div>
        </aside>
      </section>
      <section>
        <Usefullinks />
      </section>
      <footer>
        <Partners />
        <Footer />
      </footer>
    </div>
  )
}

export default Activities
