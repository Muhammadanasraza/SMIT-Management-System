import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router"
import Home from './components/Home'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import { Button } from './components/ui/button'
import Traineer from './traineer/Traineer'


function App() {
  return (
    <BrowserRouter>
    
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/traineer" element={<Traineer/>} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
        <Route path="/teacher" element={<Teacher />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
