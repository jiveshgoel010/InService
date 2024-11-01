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
import SingleCategory from './pages/main/SingleCategory'

/* Testing */
import TestLayout from './layouts/TestLayout'
import SingleSellerPage from './components/main/SingleSellerPage'

const App = () => {

  return (
    <>
      <Routes>
        {/* Root */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Index />} />
          {/* <Route path="home" element={<Home />} /> */}
          <Route path="about" element={<About />} />
        </Route>

        {/* Testing */}
        <Route path="/test" element={<TestLayout />} >
          <Route index element={<Home />} />
          <Route path="singleCategory" element={<SingleCategory />} />
          <Route path="singleSeller" element={<SingleSellerPage />} />
        </Route>

        {/* Dashboard */}
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