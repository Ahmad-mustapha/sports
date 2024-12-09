import React, { useState } from 'react'
import { Latestnewscarousel } from './Latestnewscarousel'
const Latestnews = () => {
  const [ selectedLatestNews, setSelectedLatestNews, ] = useState('tennis')
  // console.log(selectedSport);

  const handlelatestNews = (sport) => {
    setSelectedLatestNews(sport);
  };
  return (
    <div className='py-6 px-8 md:px-14 '>
        <div className="flex items-center justify-between mb-8">
          <p className="font-[500] text-[2rem]">Latest News</p>
          <span className='flex items-center'>
            <button 
            onClick={(e) => handlelatestNews('tennis')}
            className={`border-[1px] border-[#d94b18] p-1 px-2 text-[.8rem] text-[#d94b18] rounded-[20px] 
            ${selectedLatestNews === 'tennis' ? 'bg-orange-500 text-white': ''}`}>Tennis</button>
            <button 
            onClick={(e) => handlelatestNews('padel')}
            className={`border-[1px] border-[#d94b18] p-1 px-2 text-[.8rem] text-[#d94b18] rounded-[20px] 
              ${selectedLatestNews === 'padel' ? 'bg-orange-500 text-white': ''}`}>Padel</button>
          </span>
        </div>
        <section>
          <Latestnewscarousel selectedLatestNews={selectedLatestNews}/>
        </section>
    </div>
  )
}

export default Latestnews
