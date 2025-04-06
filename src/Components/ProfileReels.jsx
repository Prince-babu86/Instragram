import React from 'react'
import { users } from '../Data/UsersData'

const ProfileReels = ({user}) => {

  return (
    <div>
      <div className='flex flex-wrap gap-1 mt-1'>
    {user.reels.map((elem , id)=>{
      return <div className='h-42 w-29 '>
      <video className='h-full w-full object-cover object-top' src={`/reels/${elem}.mp4`}></video>
    </div>
    })}
      </div>
    </div>
  )
}

export default ProfileReels