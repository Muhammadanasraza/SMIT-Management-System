import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router"
import Home from './components/ui/Home'
import Login from './auth/login/login'
import Register from './auth/register/register'


function App() {
  return (
    <BrowserRouter>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
         {/* 
        <Route path="/user" element={<User />} />
        <Route path="/user" element={<User />} />
        <Route path="/teacher" element={<Teacher />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
