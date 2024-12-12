import React from 'react'
import './App.css'
// import Homepage from './pages/home/Homepage'
import { Homepage, Clubs } from './pages/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/clubs' element={<Clubs />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
