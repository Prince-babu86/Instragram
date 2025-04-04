import React, { useEffect, useState, useRef } from 'react'
import FeedLoader from '../SkeletonLoader/FeedLoader'
import { reels } from '../Data/Reels'
import { posts } from '../Data/Postdata'
import { Link, useNavigate } from 'react-router-dom'
const Feed = () => {
  const [isLoader, setIsLoader] = useState(true)
  const videoRefs = useRef([])
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setIsLoader(false)
    }, 2000)
  }, [])



  return (
    <div>
      {isLoader ? (
        posts.map((elem, id) => {
          return <FeedLoader key={id} />
        })
      ) : (
        posts.map((elem, id) => {
          return (
            <div key={id} className="feed w-full bg-red-40 mb-4">
              <div className="relative">
                <div className="fd-user p-2 flex items-center gap-2 relative z-10">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={elem.user.profilePicture}
                    alt=""
                  />
                  <div className="flex items-start justify-center flex-col">
                    <Link to={`/${elem.user.username}`} className="text-sm">{elem.user.username}</Link>
                    <h4 className="text-[11px]">rajasthan</h4>
                  </div>
                  <div className="absolute right-3 flex items-center justify-center  gap-5">
                    <button className='text-[12.5px] border-[1px] border-gray-500 py-1.5 px-3 rounded-md' >Follow</button>
                    <i className="ri-more-2-fill text-xl font-thin"></i>
                  </div>
                </div>
                <div className="top-0 w-full">
                  <img
                    
                    className="w-full h-full"
                    src={elem.imageUrl}
                    alt=""
                  />
                </div>
              </div>

              <div className="fd-sharesection flex items-center justify-between px-3 z-20 mt-3">
                <div className="flex items-center gap-4">
                  <div className="fd-sd flex items-center gap-1">
                    <div>
                      <svg
                        aria-label="Like"
                        className="x1lliihq x1n2onr6 xyb1xck"
                        fill="currentColor"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <title>Like</title>
                        <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                      </svg>
                    </div>
                    <h4 className="text-[13px]">{elem.stats.likes}</h4>
                  </div>
                  <div className="fd-sd flex items-center gap-1">
                    <div>
                      <svg
                        aria-label="Comment"
                        className="x1lliihq x1n2onr6 x5n08af"
                        fill="currentColor"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <title>Comment</title>
                        <path
                          d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                          fill="none"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="text-[13px]">{elem.stats.comments}</h4>
                  </div>
                  <div className="fd-sd flex items-center gap-1">
                    <div>
                      <svg
                        aria-label="Share"
                        className="x1lliihq x1n2onr6 xyb1xck"
                        fill="currentColor"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <title>Share</title>
                        <line
                          fill="none"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="2"
                          x1="22"
                          x2="9.218"
                          y1="3"
                          y2="10.083"
                        ></line>
                        <polygon
                          fill="none"
                          points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                          stroke="currentColor"
                          stroke-linejoin="round"
                          stroke-width="2"
                        ></polygon>
                      </svg>
                    </div>
                    <h4 className="text-[13px]">{elem.stats.shares}</h4>
                  </div>
                </div>
                <div>
                  <svg
                    aria-label="Save"
                    className="x1lliihq x1n2onr6 x5n08af"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Save</title>
                    <polygon
                      fill="none"
                      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polygon>
                  </svg>
                </div>
              </div>
              <div className="fd-comment px-3 mt-2">
                <p className="text-[12px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquam, iure.
                </p>
              </div>
              <h4 className="text-[10px] px-3 text-gray-500 mt-2">Times ago</h4>
            </div>
          )
        })
      )}
    </div>
  )
}

export default Feed
