import React from 'react'
import { useRef , useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel } from "swiper/modules";
import { reels } from '../Data/Reels';


const Reels = () => {
  const videoRefs = useRef([]);
  const [progress, setProgress] = useState(0);

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex

    videoRefs.current.forEach((video , index)=>{
      // console.log(video)
      if(video){
        if(index === activeIndex){
          video.play()
          console.log(video)
          console.log(progress)
        }else{
          video.pause()
        }
      }
    })
  }


  const handleTimeUpdate = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress);
      console.log(video)
    }
  };
  

 

  return (
    <div>
      <Swiper
      direction="vertical"
      slidesPerView={1}
      spaceBetween={0}
      mousewheel={true}
      pagination={{ clickable: true }}
      onSlideChange={handleSlideChange}
      // modules={[Mousewheel, Pagination]} 
      className="Reels h-[92vh] w-full bg-amber-0 relative">
       {reels.map((elem , index)=>{
        return  <SwiperSlide  className="Reel relative h-full w-full ">
        <div className="icons right-2 top-[60%] absolute  b z-[100] flex items-center justify-between gap-3 flex-col ">
          <div className="it flex items-center justify-center flex-col p-1 gap-1.5">
          <svg aria-label="Like" class="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
          <h4 className='text-[12px]'>{elem.stats.likes}</h4>
          </div>
          <div className="it flex items-center justify-center flex-col p-1 gap-1.5">
          <svg aria-label="Comment" class="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
          <h4 className='text-[12px]'>{elem.stats.comments}</h4>
          </div>

          <div className="it flex items-center justify-center flex-col p-1 gap-1.5">
          <svg aria-label="Share" class="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
          <h4 className='text-[12px]'>{elem.stats.shares}</h4>
          </div>


          <div className="it flex items-center justify-center flex-col p-1 gap-1.5">
          <svg aria-label="Save" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
          <h4 className='text-[12px]'>{elem.stats.saves}</h4>
          </div>


          <div className="it flex items-center justify-center flex-col p-1 gap-1.5">
          <svg aria-label="More" class="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>More</title><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
         
          </div>
      
        </div>
        <div className="bottom-bar z-[100] absolute bottom-0 flex flex-col items-start  w-full  ">
        <div className="flex items-center gap-2 px-3">
        <div className="prf h-10 w-10 relative">
            <img className='h-full w-full rounded-full' src="https://i.pinimg.com/736x/49/eb/d1/49ebd1e6b1739fd8f3e2db664daaac1c.jpg" alt="" />
          </div>
          <div className="flex flex-col items-start">
            <h4 className='text-[13px]'>{elem.user.username}</h4>
            <h4 className='text-[13px]'>video title name</h4>
          </div>
          <button className='absolute right-[30%] top-1 outline-none text-[12px] border-1 py-1 px-2 rounded-md'>Follow</button>
        </div>
        <h2 className='px-3 mt-[6px] py-1 text-[10px]'>{elem.caption}

        </h2>
        <div className="progessbar w-full h-[2px] bg-gray-500/50 rounded-full relative ">
        <div  className="process h-full bg-white rounded-full transition-all"  style={{ width: `${progress}%` }}>

        </div>
        </div>
        </div>
        <div className='h-full w-full'>
          <video loop onTimeUpdate={() => handleTimeUpdate(index)}  ref={(el)=>{videoRefs.current[index] = el}} className='h-full w-full object-cover' src={elem.videoUrl} playsInline></video>
        </div>
      </SwiperSlide>
       })}

      </Swiper>
    </div>
  )
}

export default Reels