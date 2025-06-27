import { useState } from 'react'
import './App.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Academics from './academics'
import Athletics from './Athletics'
import Application from './pages/Application'
import Register from './pages/Register'
import Login from './pages/Login'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Academics' element={<Academics/>}/>
          <Route path='/Athletics' element={<Athletics/>}/>
          <Route path='/Application' element={<Application/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
