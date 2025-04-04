import React from 'react'
import Navbar from '../Components/Navbar'
import Stories from '../Components/Stories'
import Feed from '../Components/Feed'

const Home = () => {
  return (
    <div className='h-[90vh] w-full overflow-y-auto'> 
    <Navbar/>
    <Stories/>
    <Feed/>
    </div>
  )
}

export default Home