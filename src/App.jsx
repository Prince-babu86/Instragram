import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import ViewStory from './Pages/ViewStory'
import Menubar from './Components/Menubar'
import { users } from './Data/User'


const App = () => {
  const location = useLocation()
  const hidemenu = location.pathname.startsWith("/story")
  
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/story/:username' element={<ViewStory/>}/>
      </Routes>
     {!hidemenu &&  <Menubar/>}
    </div>
  )
}

export default App