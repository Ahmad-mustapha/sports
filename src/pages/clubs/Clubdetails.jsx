import { Mainheader } from '../../components'
import { Link } from 'react-router-dom'
import Dummymap from '../../assets/dummymap.png'

const Clubdetails = () => {
  return (
    <div>
      <Mainheader />
      <section className='py-6 px-8 md:px-14 flex gap-6 mt-6'>
        <aside className='w-4/6'>
            <h1 className='text-[3rem] font-[800] text-[#262727]'>TPV Spitsbergen</h1>
            <div className='flex items-center gap-2'>
                <Link className='text-[1.7rem] text-[#262727] font-extrabold border-[2px] rounded-md border-orange-500 p-1'>JOBS</Link>
                <Link className='text-[1.7rem] text-[#262727] font-extrabold border-[2px] rounded-md border-orange-500 p-1'>ACTIVITES</Link>
            </div>
            <section className="flex items-center justify-center sm:justify-start gap-6 flex-wrap text-[#4c535a] bg-[#193291] rounded-md p-6">
                <div className="w-full sm:w-[160px]">
                    <label htmlFor="" className="text-[#dae1e3] text-[.9rem] font-[600]">Sport</label> <br />
                    <select className="outline-none rounded-[100px] p-2 w-full" name="" id="">
                        <option value="">Tennis</option>
                        <option value="">Padel</option>
                        <option value="">Basketball</option>
                        <option value="">football</option>
                    </select>
                </div>
                <div className="w-full sm:w-[160px]">
                    <label className="text-[#dae1e3] text-[.9rem] font-[600]" htmlFor="">When</label> <br />
                    <input 
                    placeholder="12/04/2000"
                    className="outline-none rounded-[100px] p-2 w-full"
                    type="date" />
                </div>
                <div className="w-full sm:w-[160px]">
                    <label htmlFor="" className="text-[#dae1e3] text-[.9rem] font-[600]">Indoor/Output</label> <br />
                    <select className="outline-none rounded-[100px] p-2 w-full" name="" id="">
                        <option value="">Both</option>
                        <option value="">Indoor</option>
                        <option value="">Outdoor</option>
                    </select>
                </div>
                <div className="w-full sm:w-[160px]">
                    <label htmlFor="" className="text-[#dae1e3] text-[.9rem] font-[600]">Part of the day</label> <br />
                    <select className="outline-none rounded-[100px] p-2 w-full" name="" id="">
                        <option value="">Tennis</option>
                        <option value="">Padel</option>
                        <option value="">Basketball</option>
                        <option value="">football</option>
                    </select>
                </div>
            </section>
            <div className='flex items-center mt-6'>
                <button className='px-2 py-1 border-orange-500 border-[1px] text-orange-500 text-[.8rem] rounded-[100px]'>60 minutes</button>
                <button className='px-2 py-1 border-orange-500 border-[1px] text-orange-500 text-[.8rem] rounded-[100px]'>90 minutes</button>
                <button className='px-2 py-1 border-orange-500 border-[1px] text-orange-500 text-[.8rem] rounded-[100px]'>120 minutes</button>
            </div>
            <div className='mt-4'>
                <h1 className='text-[1.5rem] font-[500] text-[#262727]'>Time</h1>
                <div className='flex items-center gap-4'>
                    <button className='border-[1px] border-blue-800 py-1 px-2 rounded-md'>9:30am</button>
                    <button className='border-[1px] border-blue-800 py-1 px-2 rounded-md'>9:30am</button>
                    <button className='border-[1px] border-blue-800 py-1 px-2 rounded-md'>9:30am</button>
                    <button className='border-[1px] border-blue-800 py-1 px-2 rounded-md'>9:30am</button>
                    <button className='border-[1px] border-blue-800 py-1 px-2 rounded-md'>9:30am</button>
                    <button className='border-[1px] border-blue-800 py-1 px-2 rounded-md'>9:30am</button>
                </div>
            </div>
        </aside>
        <aside className='w-2/6'>
            <div className='rounded-lg bg-[#193291] py-8 px-10 text-white'>
                <p className='font-[600] text-[1.7rem]'>Visiting address</p>
                <p className='text-[1rem] my-4 font-[500]'>Potjesdam 4, 1722 XN SOUTH <br /> SCHARWOUDE</p>
                <img className='h-40 w-full' src={Dummymap} alt="" />
            </div>
        </aside>
      </section>
    </div>
  )
}

export default Clubdetails
