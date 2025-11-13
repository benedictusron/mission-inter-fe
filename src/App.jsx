import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Login from './auth/Pages/Login'
import Register from './auth/Pages/Register'
import Beranda from './pages/Home/Home'

function App() {
 

  return (
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/' element={<Beranda/>} />
    </Routes>
  )
}

export default App;
