import React from 'react'
import Home from './Home/Home'
import ScheduledRide from './components/ScheduledRide'
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/scheduledride' element={<ScheduledRide/>}/>
      </Routes>
    </>
  )
}

export default App