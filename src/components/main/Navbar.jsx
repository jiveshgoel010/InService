/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {
MenuIcon,
Pickaxe,
X,
User,
LogOut
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    };

    return (
        <>
            {/* Navbar */}
            <nav className='bg-lightBlack text-white flex justify-between items-center p-4 relative md:p-4 md:m-2 md:px-8 md:rounded-full'>
                <div className="flex gap-1"><Pickaxe />Inservice</div>
                <div className="md:hidden">
                    <button className='border-none' onClick={toggleMenu}>
                        {menuOpen ? <X size={32} /> : <MenuIcon size={32} />}
                    </button>
                </div>
                <div className="hidden md:flex gap-4">
                    <Link to="/" className=''>Home</Link>
                    <Link to="/" className=''>About</Link>
                    <Link to="/" className=''>Services</Link>
                    <Link to="/" className=''>Contact</Link>
                </div>
                <div className="hidden md:flex gap-4">
                    <Link to="/" className=''><User /></Link>
                    <Link to="/" className=''><LogOut /></Link>
                </div>
            </nav>

            {menuOpen && (
                <div className='bg-lightBlack text-white flex flex-col w-full items-center p-2 absolute top-20px z-50 md:hidden'>
                    <Link to="/" className='p-1'>Home</Link>
                    <Link to="/" className='p-1'>About</Link>
                    <Link to="/" className='p-1'>Services</Link>
                    <Link to="/" className='p-1'>Contact</Link>
                </div>
            )}

        </>
    )
}

export default Navbar