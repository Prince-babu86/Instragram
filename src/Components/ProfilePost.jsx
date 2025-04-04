import React from 'react'

const ProfilePost = ({user}) => {
  return (
    <div>
      <div className='flex flex-wrap gap-1 mt-1'>
    {user.posts.map((elem , id)=>{
      return <div className='h-42 w-29 '>
      <img className='h-full w-full object-cover object-top' src={`/images/${elem}.jpg`}></img>
    </div>
    })}
      </div>
    </div>
  )
}

export default ProfilePost