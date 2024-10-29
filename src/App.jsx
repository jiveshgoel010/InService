/* eslint-disable no-unused-vars */
import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import Dashboard from './pages/dashboard/Dashboard'
import About from './pages/main/About'

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<h2>Home</h2>}>
          <Route index element={<h2>Home</h2>} />
          <Route path='about' element={<About />} />
        </Route>
        
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='transactions' element={<h2>transactions</h2>} />
        </Route>

        <Route path="*" element={<h2>Not found</h2>}/>
      </Routes>
    </>
  )
}

export default App