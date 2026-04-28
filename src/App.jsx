import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'
import PlayVideo from './components/PlayVideo'

const App = () => {
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/search/:id' element = {<Search/>}/>
        <Route path = '/video/:id' element = {<PlayVideo/>}/>
      </Routes>
    </div>
  )
}

export default App

