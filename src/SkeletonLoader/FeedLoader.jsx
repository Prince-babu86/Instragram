import React from 'react'

const FeedLoader = () => {
  return (
    <div>
         <div className="flex flex-col space-y-4 w-full p-4">
      {/* Profile Picture Loader */}
      <div className="flex items-center space-x-4 w-full">
        <div className="w-12 h-12 rounded-full bg-gray-300 animate-pulse"></div>
        <div className="flex-1">
          <div className="h-4 w-32 bg-gray-300 animate-pulse rounded"></div>
          <div className="h-3 w-24 bg-gray-300 animate-pulse rounded mt-2"></div>
        </div>
      </div>

      {/* Image/Video Loader */}
      <div className="w-full h-64 bg-gray-300 animate-pulse rounded-lg"></div>

      {/* Caption & Like Loader */}
      <div className="space-y-2">
        <div className="h-4 w-3/4 bg-gray-300 animate-pulse rounded"></div>
        <div className="h-4 w-1/2 bg-gray-300 animate-pulse rounded"></div>
      </div>

      {/* Icons Loader (Like, Comment, Share) */}
      <div className="flex space-x-4">
        <div className="w-6 h-6 bg-gray-300 animate-pulse rounded-full"></div>
        <div className="w-6 h-6 bg-gray-300 animate-pulse rounded-full"></div>
        <div className="w-6 h-6 bg-gray-300 animate-pulse rounded-full"></div>
      </div>
    </div>
    
    </div>
  )
}

export default FeedLoader