import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
    FaShoppingCart,
    FaUser,
    FaMoon,
    FaBars,
    FaTimes
} from 'react-icons/fa'

import { HiUserAdd } from "react-icons/hi"
import { AiFillSkype } from "react-icons/ai"

const NavBar = () => {

    return (
        <>
            <nav className='bg-gray-900 w-full h-16 flex items-center justify-between px-4 text-white'>
                <div className='text-2xl font-bold'>My Ecom Store</div>
                <div className='hidden md:flex space-x-6'>

                    <Link to="/" className='hover:text-gray-400'>Home</Link>
                    <Link to="/products" className='hover:text-gray-400'>Products</Link>
                    <Link to="/about" className='hover:text-gray-400'>About</Link>
                    <Link to="/contact" className='hover:text-gray-400'>Contact</Link>

                </div>
                <div className='flex items-center space-x-4'>
                    <div className='relative'>
                    <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center'>0</span>
                  <Link to="/cart"> <FaShoppingCart size={20} className='cursor-pointer hover:text-gray-400' /></Link>
                    </div>
                    <FaUser size={20} className='cursor-pointer hover:text-gray-400' />
                    <FaMoon size={20} className='cursor-pointer hover:text-gray-400' />
                    <div className='md:hidden'>
                        <FaBars size={20} className='cursor-pointer hover:text-gray-400' />
                    </div>

                </div>
            </nav>
        </>
    );
}

export default NavBar