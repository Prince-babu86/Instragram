import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import ViewStory from './Pages/ViewStory'
import Reels from './Pages/Reels'
import Menubar from './Components/Menubar'
import Search from './Pages/Search'
import ViewSearchReel from './Pages/ViewSearchReel'
import UserProfile from './Pages/UserProfile'



import { users } from './Data/User'


const App = () => {
  const location = useLocation()
  const hidemenu = location.pathname.startsWith("/story")
  
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/story/:username' element={<ViewStory/>}/>
        <Route path='/Reel' element={<Reels/>}/>
        <Route path='/p/:id' element={<ViewSearchReel/>}/>
        <Route path='/:username/*' element={<UserProfile/>}/>
        {/* <Route path='/:username/reels' element={<UserProfile/>}/> */}
        
      </Routes>
     {!hidemenu &&  <Menubar/>}
    </div>
  )
}

export default App