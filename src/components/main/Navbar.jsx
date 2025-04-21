/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {
  MenuIcon,
  Pickaxe,
  X,
  User,
  LogIn,
  LogOut,
  ChevronDown
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const { isLoggedIn, logout, userType } = useAuth();
  const navigate = useNavigate();


  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  };

  const handleLogout = () => {
    logout();
    // Perform any additional logout logic here (e.g., clearing tokens)
    navigate('/'); // Redirect to home page after logout
  };

  const mainServices = [
    "Home Services", "Personal Care", "Vehicle Services", "Tech Services", "Outdoor Services"
  ]

  const urlFriendlyServices = mainServices.map(service =>
    service.toLowerCase().replace(/\s+/g, '-')
  );

  return (
    <>
      <div>
        {/* Navbar */}
        <div className="md:py-2 md:px-4">
          <nav className='bg-lightBlack text-white flex justify-between items-center p-4 relative md:p-4 md:px-8 md:rounded-full ring-1 ring-white'>
            <div className="flex gap-1"><Pickaxe />Inservice</div>
            <div className="md:hidden">
              <button className='border-none' onClick={toggleMenu}>
                {menuOpen ? <X size={32} /> : <MenuIcon size={32} />}
              </button>
            </div>
            <div className="hidden md:flex gap-4">
              {isLoggedIn ? (
                <>
                  <Link to="/home" className="">
                    Home
                  </Link>
                  <div className="relative group">
                    <DropdownMenu>
                      <DropdownMenuTrigger  className='flex items-center'>Services <ChevronDown  size={20}/></DropdownMenuTrigger>
                      <DropdownMenuContent>

                        {urlFriendlyServices.map((service, index) => (
                          <DropdownMenuItem key={index}>
                            <Link to={`/search/${service}`}>{mainServices[index]}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <Link to="/requests" className="">
                    Requests
                  </Link>
                  <Link to="/contact" className="">
                    Contact
                  </Link>
                  {userType != 'Client' && (
                    <Link to="/dashboard" className="">
                      Dashboard
                    </Link>
                  )}
                </>
              ) : (
                <>
                  <Link to="/" className="">
                    Home
                  </Link>
                  <Link to="/about" className="">
                    About
                  </Link>
                  <Link to="/services" className="">
                    Services
                  </Link>
                  <Link to="/contact" className="">
                    Contact
                  </Link>
                </>
              )}
            </div>
            <div className="hidden md:flex gap-4 items-center">
              {isLoggedIn ? (
                <>
                  <Link to="/home" className=''><User /></Link>
                  <button onClick={handleLogout} className='flex items-center gap-1'>
                    <LogOut />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className='flex items-center gap-1'>
                    {/* <LogIn /> */}
                    <span>Sign In</span>
                  </Link>
                  <Link to="/signup" className='flex items-center gap-1'>
                    {/* <LogIn /> */}
                    <span>Sign Up</span>
                  </Link>
                </>
              )}
            </div>
          </nav>

          {menuOpen && (
            <div className="bg-lightBlack text-white flex flex-col w-full items-center p-2 absolute top-20px z-50 md:hidden">
              {isLoggedIn ? (
                <>
                  <Link to="/home" className="p-1">
                    Home
                  </Link>
                  <div className="relative group">

                    <DropdownMenu>
                    <DropdownMenuTrigger  className='flex items-center'>Services <ChevronDown  size={20}/></DropdownMenuTrigger>
                      <DropdownMenuContent>

                        {urlFriendlyServices.map((service, index) => (
                          <DropdownMenuItem key={index}>
                            <Link to={`/search/${service}`}>{mainServices[index]}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>

                  </div>
                  <Link to="/requests" className="">
                    Requests
                  </Link>
                  <Link to="/contact" className="p-1">
                    Contact
                  </Link>
                  {userType != 'Client' && (
                    <Link to="/dashboard" className="p-1">
                      Dashboard
                    </Link>
                  )}
                  <Link to="/home" className="p-1">
                    Profile
                  </Link>
                  <button onClick={handleLogout} className="p-1 flex items-center gap-1">
                    <LogOut />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <Link to="/" className="p-1">
                    Home
                  </Link>
                  <Link to="/about" className="p-1">
                    About
                  </Link>
                  <Link to="/services" className="p-1">
                    Services
                  </Link>
                  <Link to="/contact" className="p-1">
                    Contact
                  </Link>
                  <Link to="/signin" className="p-1 flex items-center gap-1">
                    <LogIn />
                    <span>Sign In</span>
                  </Link>
                  <Link to="/signup" className="p-1 flex items-center gap-1">
                    <LogIn />
                    <span>Sign Up</span>
                  </Link>
                </>
              )}
            </div>
          )}
        </div >
      </div >
    </>
  )
}

export default Navbar