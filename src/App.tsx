import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandPage from './pages/LandPage'
import Login from './pages/Login'
import SignUp from './pages/signup'
import Dashboard from './pages/Dashboard'
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  )
}

export default App
