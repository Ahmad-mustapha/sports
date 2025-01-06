import React from 'react'
import './App.css'
import { Homepage, Clubs, Clubdetails, Discover, Download, Eventdetails, Activities, Reserve, News, Admin } from './pages/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/clubs' element={<Clubs />}/>
          <Route path='/discover' element={<Discover />}/>
          <Route path='/download' element={<Download />}/>
          <Route path='/news' element={<News />}/>
          <Route path='/event/:id' element={<Eventdetails />}/>
          <Route path='/clubs/:id' element={<Clubdetails />}/>
          <Route path='/clubs/:id/activities' element={<Activities />}/>
          <Route path='/clubs/:id/reserve' element={<Reserve />}/>
          <Route path='/admin' element={<Admin />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
