import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Beranda from './pages/Home/Home'

function App() {
 

  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/Register' element={<Register/>} />
      <Route path='/Home' element={<Beranda/>} />
    </Routes>
  )
}

export default App;
