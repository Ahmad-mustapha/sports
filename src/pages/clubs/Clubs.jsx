import React from "react"
import { Mainheader } from "../../components"
import Map from '../../assets/dummymap.png'
import Location from "./Location"
import {Usefullinks, Footer, Partners} from "../../components"


const CLubs = () => {
  return (
    <div>
      <Mainheader />
      <main className="py-6 px-4 md:px-10">
        <section className=" text-[#4c535a] bg-[#193291] rounded-t-md p-6">
            <section className="flex items-center justify-center sm:justify-start gap-6 flex-wrap">
                <div className="w-full sm:w-[220px]">
                    <label htmlFor="" className="text-[#dae1e3] text-[.9rem] font-[600]">Sport</label> <br />
                    <select className="outline-none rounded-[100px] p-2 w-full" name="" id="">
                        <option value="">Tennis</option>
                        <option value="">Padel</option>
                        <option value="">Basketball</option>
                        <option value="">football</option>
                    </select>
                </div>
                <div className="w-full sm:w-[220px]">
                    <label className="text-[#dae1e3] text-[.9rem] font-[600]" htmlFor="">When</label> <br />
                    <input 
                    placeholder="12/04/2000"
                    className="outline-none rounded-[100px] p-2 w-full"
                    type="date" />
                </div>
                <div className="w-full sm:w-[220px]">
                    <label htmlFor="" className="text-[#dae1e3] text-[.9rem] font-[600]">Indoor/Output</label> <br />
                    <select className="outline-none rounded-[100px] p-2 w-full" name="" id="">
                        <option value="">Both</option>
                        <option value="">Indoor</option>
                        <option value="">Outdoor</option>
                    </select>
                </div>
                <div className="w-full sm:w-[220px]">
                    <label htmlFor="" className="text-[#dae1e3] text-[.9rem] font-[600]">Part of the day</label> <br />
                    <select className="outline-none rounded-[100px] p-2 w-full" name="" id="">
                        <option value="">Tennis</option>
                        <option value="">Padel</option>
                        <option value="">Basketball</option>
                        <option value="">football</option>
                    </select>
                </div>
                <div className="w-full sm:w-[220px]">
                    <label className="text-[#dae1e3] text-[.9rem] font-[600]" htmlFor="">Which club</label> <br />
                    <input 
                    placeholder="Downtown"
                    className="outline-none rounded-[100px] p-2 w-full"
                    type="text" />
                </div>
                <div className="w-full sm:w-[220px]">
                    <label className="text-[#dae1e3] text-[.9rem] font-[600]" htmlFor="">Where</label> <br />
                    <input 
                    placeholder="Dubai"
                    className="outline-none rounded-[100px] p-2 w-full"
                    type="text" />
                </div>
                <div className="w-full sm:w-[220px]">
                    <label htmlFor="" className="text-[#dae1e3] text-[.9rem] font-[600]">Distance</label> <br />
                    <select className="outline-none rounded-[100px] p-2 w-full" name="" id="">
                        <option value="">Show all</option>
                    </select>
                </div>
            </section>
            <section className="mt-6">
                <p className="text-[#dae1e3] text-[.9rem] font-[600] mb-2">Duration</p>
                <div className='flex items-center justify-center sm:justify-start flex-wrap gap-2 hero-content'>
                    <button 
                    className='text-orange-500 border-[1px] text-[.9rem] border-orange-500 bg-white rounded-2xl px-2 py-[.1rem]'> Tennis</button>
                    <button
                    className='text-orange-500 border-[1px] text-[.9rem] border-orange-500 bg-white rounded-2xl px-2 py-[.1rem]'>Padel</button>
                    <button
                    className='text-orange-500 border-[1px] text-[.9rem] border-orange-500 bg-white rounded-2xl px-2 py-[.1rem]'>Squash</button>
                    <button
                    className='text-orange-500 border-[1px] text-[.9rem] border-orange-500 bg-white rounded-2xl px-2 py-[.1rem]'>Pickleball</button>
                    <button
                    className='text-orange-500 border-[1px] text-[.9rem] border-orange-500 bg-white rounded-2xl px-2 py-[.1rem]'> Football</button>
                    <button
                    className='text-orange-500 border-[1px] text-[.9rem] border-orange-500 bg-white rounded-2xl px-2 py-[.1rem]'>Basketball</button>
                </div>
            </section>
        </section>
        <section className="flex items-center flex-wrap sm:flex-nowrap">
            <section className="bg-[#eeeeee] p-4 w-full sm:w-3/6 h-[400px] overflow-y-scroll">
                <Location />
            </section>
            <section className="w-full sm:w-3/6 h-[400px] ">
                <img src={Map} alt="" className="w-full h-full"/>
            </section>
        </section>
      </main>
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

export default CLubs
