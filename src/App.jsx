import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router"
import Home from './components/ui/Home'
function App() {
  return (
    <BrowserRouter>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
        <Route path="/teacher" element={<Teacher />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
