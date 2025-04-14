import React from 'react'
import Home from './Home/Home'
import ScheduledRide from './components/ScheduledRide'
import { Navigate, Route, Routes } from "react-router-dom"
import Signup from './components/Signup'
import  { Toaster } from 'react-hot-toast';
import Login from './components/Login'
import { useAuth } from './context/AuthProvider'

const App = () => {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser)
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/scheduledride' element={authUser? <ScheduledRide/>:<Navigate to="/login"/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Toaster />
    </>
  )
}

export default App