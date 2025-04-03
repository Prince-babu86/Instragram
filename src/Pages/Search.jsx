import React from 'react'
import { reels } from '../Data/Reels'
import { Link } from 'react-router-dom'

const Search = () => {
  return (
    <div className='h-[82.5vh] overflow-y-auto'>
      <div className="srch w-full mt-5 px-2">
        <div className='flex w-full items-center gap-3 bg-[#363636] py-2 px-2 rounded-lg'>
        <svg aria-label="Search" class="x1lliihq x1n2onr6 x1cp0k07" fill="currentColor" height="16" role="img" viewBox="0 0 24 24" width="16"><title>Search</title><path d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.511" x2="22" y1="16.511" y2="22"></line></svg>
        <input className='h-full w-full outline-none' type="text" placeholder='Search' />

        </div>

      </div>
      <div className="grip-reels flex flex-wrap gap-1 mt-4 ">
        {reels.map((elem ,index)=>{
          return <Link to={`/p/${elem.reelId}`}  key={index} className='w-[115px]'>
            <video src={elem.videoUrl}></video>
          </Link>
        })}
      </div>
    </div>
  )
}

export default Search