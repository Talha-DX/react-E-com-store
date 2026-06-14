import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
    FaShoppingCart,
    FaUser,
    FaMoon,
    FaBars,
    FaTimes,
    FaSun,
    FaStore,
    FaTag,
    FaInfoCircle,
    FaEnvelope,
} from 'react-icons/fa'
import { HiUserAdd } from "react-icons/hi"
import { useSelector, useDispatch } from 'react-redux'
import { changeColor } from '../Features/Theme/themebg'

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isCartHovered, setIsCartHovered] = useState(false)
    
    const cartItems = useSelector((state) => state.cartItem.items)
    const theme = useSelector((state) => state.theme.color)
    const dispatch = useDispatch()
    const location = useLocation()

    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { to: "/", label: "Home", icon: FaStore },
        { to: "/products", label: "Products", icon: FaTag },
        { to: "/about", label: "About", icon: FaInfoCircle },
        { to: "/contact", label: "Contact", icon: FaEnvelope },
    ]

    const getNavLinkClass = (isActive) => {
        return `relative px-3 py-2 rounded-lg transition-all duration-300 ${
            isActive 
                ? 'text-indigo-600 bg-indigo-50 dark:text-indigo-400 dark:bg-indigo-900/30' 
                : 'text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'
        }`
    }

    return (
        <>
            <nav className={`
                fixed top-0 left-0 right-0 z-50 
                transition-all duration-300 ease-in-out
                ${isScrolled 
                    ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
                    : 'bg-white dark:bg-gray-900 shadow-md'
                }
            `}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link 
                            to="/" 
                            className="flex items-center space-x-2 group"
                        >
                            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1.5 rounded-lg transform group-hover:scale-105 transition-transform duration-300">
                                <FaStore className="text-white text-xl" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                                Sasta Bazar
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    className={({ isActive }) => getNavLinkClass(isActive)}
                                >
                                    <div className="flex items-center space-x-2">
                                        <link.icon className="text-sm" />
                                        <span>{link.label}</span>
                                    </div>
                                </NavLink>
                            ))}
                        </div>

                        {/* Right Side Icons */}
                        <div className="flex items-center space-x-3">
                            {/* Cart Icon */}
                            <div 
                                className="relative group"
                                onMouseEnter={() => setIsCartHovered(true)}
                                onMouseLeave={() => setIsCartHovered(false)}
                            >
                                <Link to="/cart" className="block">
                                    <div className={`
                                        p-2 rounded-full transition-all duration-300
                                        ${cartItems.length > 0 
                                            ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600' 
                                            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                                        }
                                    `}>
                                        <FaShoppingCart size={20} className="transition-transform group-hover:scale-110" />
                                    </div>
                                </Link>
                                
                                {/* Cart Badge */}
                                {cartItemCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full min-w-[20px] h-5 px-1 flex items-center justify-center shadow-lg animate-pulse">
                                        {cartItemCount > 99 ? '99+' : cartItemCount}
                                    </span>
                                )}

                                {/* Cart Tooltip */}
                                {isCartHovered && cartItemCount > 0 && (
                                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                                        {cartItemCount} items in cart
                                    </div>
                                )}
                            </div>

                            {/* User Icon */}
                            <div className="relative group">
                                <Link to="/">
                                    <div className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                                        <FaUser size={20} className="hover:scale-110 transition-transform" />
                                    </div>
                                </Link>
                            </div>

                            {/* Theme Toggle */}
                            {/* <button
                                onClick={() => dispatch(changeColor())}
                                className={`
                                    p-2 rounded-full transition-all duration-300
                                    ${theme === 'black' 
                                        ? 'bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30' 
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }
                                `}
                                aria-label="Toggle theme"
                            >
                                {theme === 'black' ? (
                                    <FaSun size={20} className="animate-spin-slow" />
                                ) : (
                                    <FaMoon size={20} className="animate-bounce-slow" />
                                )}
                            </button> */}

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <FaTimes size={20} />
                                ) : (
                                    <FaBars size={20} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`
                    md:hidden fixed inset-x-0 top-16 bg-white dark:bg-gray-900 shadow-lg transform transition-all duration-300 ease-in-out z-40
                    ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
                `}>
                    <div className="px-4 py-4 space-y-2">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={({ isActive }) => `
                                    flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300
                                    ${isActive 
                                        ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' 
                                        : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                                    }
                                `}
                            >
                                <link.icon size={18} />
                                <span className="font-medium">{link.label}</span>
                            </NavLink>
                        ))}
                        
                        {/* Mobile Menu Divider */}
                        <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                        
                        {/* Mobile User Actions */}
                        <Link 
                            to="/profile" 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                        >
                            <FaUser size={18} />
                            <span className="font-medium">My Account</span>
                        </Link>
                        
                        <Link 
                            to="/signup" 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                        >
                            <HiUserAdd size={18} />
                            <span className="font-medium">Sign Up</span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Spacer to prevent content from hiding under fixed navbar */}
            <div className="h-16"></div>

            {/* Add custom animations */}
            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
                
                .animate-spin-slow {
                    animation: spin-slow 3s linear infinite;
                }
                
                .animate-bounce-slow {
                    animation: bounce-slow 2s ease-in-out infinite;
                }
            `}</style>
        </>
    )
}

export default NavBar