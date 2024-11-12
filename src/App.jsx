/* eslint-disable no-unused-vars */
import './App.css'
import React from 'react'
import { AuthProvider } from './context/AuthContext'
import { Route, Routes } from 'react-router-dom'

/* Dashboard*/
import DashboardLayout from './layouts/DashboardLayout'
import Dashboard from './pages/dashboard/Dashboard'

/* Main */
import MainLayout from './layouts/MainLayout'
import Index from './pages/main/Index'
import Home from './pages/main/Home'
import About from './pages/main/About'
import SearchPage from './components/SearchPage/SearchPage'

import Contact from './pages/main/Contact'
import Signup from './pages/main/Signup'
import Signin from './pages/main/Signin'
import SingleCategory from './pages/main/SingleCategory'

import SingleSellerPage from './components/main/SingleSellerPage'
import ProfilePageVendor from './pages/main/ProfilePageVendor'
import HireVendor from './pages/main/HireVendor'
import RequestHistory from './pages/main/RequestHistory'
import Requests from './pages/dashboard/Requests'
import Profile from './pages/dashboard/Profile'
import Test from './pages/main/Test'

const App = () => {

  return (
    <AuthProvider>
      <Routes>  
        {/* Root */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Index />} />
          <Route path="home" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="search/:serviceName" element={<SearchPage />} />

          <Route path="profile" element={<ProfilePageVendor />} />
          <Route path='hire' element={<HireVendor />} />
          <Route path='requests' element={<RequestHistory />} />

          {/* Testing page inside mainLayout */}
          <Route path="test" element={<Test />} />
          
          {/* <Route path="services" element={<Services />} /> */}
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="login" element={<Signin />} />
        <Route path="signup" element={<Signup />} />

        {/* Testing */}
        {/* <Route path="/test" element={<TestLayout />} >
          <Route index element={<Home />} />
          <Route path="singleCategory" element={<SingleCategory />} />
          <Route path="singleSeller" element={<SingleSellerPage />} />
        </Route> */}

        {/* Dashboard */}

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='profile' element={<Profile/>} />
          <Route path='requests' element={<Requests/>} />
        </Route>

        <Route path="*" element={<h2>Not found</h2>} />
      </Routes>
    </AuthProvider>
  )
}

export default App