import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'
import PlayingVideo from './components/PlayingVideo'
import { useAuth } from './contextapi/AuthProvider'
import Loading from './loader/Loading'

const App = () => {

  const {loading} = useAuth();
  
  return (
    <div>
      {loading && <Loading />}

      <Navbar />
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/search/:id' element = {<Search/>}/>
        <Route path = '/video/:id' element = {<PlayingVideo/>}/>
      </Routes>
    </div>
  )
}

export default App

