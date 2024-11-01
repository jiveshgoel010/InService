/* eslint-disable no-unused-vars */
import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

/* Dashboard*/
import DashboardLayout from './layouts/DashboardLayout'
import Dashboard from './pages/dashboard/Dashboard'

/* Main */
import MainLayout from './layouts/MainLayout'
import Index from './pages/main/Index'
import Home from './pages/main/Home'
import About from './pages/main/About'
import Contact from './pages/main/Contact'
import Signup from './pages/main/Signup'
import Signin from './pages/main/Signin'

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Index />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="services" element={<Services />} /> */}
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="signin" element={<Signin/>} />
        <Route path="signup" element={<Signup/>} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='transactions' element={<h2>transactions</h2>} />
        </Route>

        <Route path="*" element={<h2>Not found</h2>} />
      </Routes>
    </>
  )
}

export default App