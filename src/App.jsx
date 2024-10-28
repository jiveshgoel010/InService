/* eslint-disable no-unused-vars */
import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </>
  )
}

export default App