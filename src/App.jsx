import React from 'react'
import './App.css'
import { Homepage, Clubs, Clubdetails } from './pages/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/clubs' element={<Clubs />}/>
          <Route path='/clubs/:id' element={<Clubdetails />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
