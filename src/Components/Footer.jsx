import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaStore,
  FaTruck,
  FaShieldAlt,
  FaUndo,
  FaCreditCard
} from 'react-icons/fa'
import { HiHeart } from 'react-icons/hi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ]
  
  const customerService = [
    { name: "Shipping Info", path: "/shipping" },
    { name: "Returns & Exchange", path: "/returns" },
    { name: "FAQ", path: "/faq" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
  ]
  
  const socialLinks = [
    { icon: FaFacebook, name: "Facebook", url: "https://facebook.com", color: "hover:bg-blue-600" },
    { icon: FaTwitter, name: "Twitter", url: "https://twitter.com", color: "hover:bg-blue-400" },
    { icon: FaInstagram, name: "Instagram", url: "https://instagram.com", color: "hover:bg-pink-600" },
    { icon: FaLinkedin, name: "LinkedIn", url: "https://linkedin.com", color: "hover:bg-blue-700" },
    { icon: FaYoutube, name: "YouTube", url: "https://youtube.com", color: "hover:bg-red-600" },
  ]
  
  const paymentMethods = [
    { name: "Visa", icon: FaCreditCard },
    { name: "Mastercard", icon: FaCreditCard },
    { name: "PayPal", icon: FaCreditCard },
    { name: "American Express", icon: FaCreditCard },
  ]
  
  const features = [
    { icon: FaTruck, text: "Free Shipping", subtext: "On orders over $50" },
    { icon: FaShieldAlt, text: "Secure Payment", subtext: "100% secure transactions" },
    { icon: FaUndo, text: "Easy Returns", subtext: "30-day return policy" },
    { icon: FaClock, text: "24/7 Support", subtext: "Customer service" },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Features Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 group">
                <div className="bg-indigo-600/20 p-2 rounded-lg group-hover:bg-indigo-600 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{feature.text}</p>
                  <p className="text-xs text-gray-400">{feature.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1.5 rounded-lg">
                <FaStore className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold">Sasta Bazar</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Your one-stop destination for premium quality products at affordable prices. 
              We're committed to providing the best shopping experience.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-indigo-400" />
                <span>123 Business Avenue, Karachi, Pakistan</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <FaPhone className="text-indigo-400" />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <FaEnvelope className="text-indigo-400" />
                <span>info@sastabazar.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-indigo-500 rounded-full"></span>
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-indigo-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4 relative inline-block">
              Customer Service
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-indigo-500 rounded-full"></span>
            </h4>
            <ul className="space-y-2">
              {customerService.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-indigo-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 relative inline-block">
              Stay Connected
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-indigo-500 rounded-full"></span>
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for exclusive offers and updates!
            </p>
            <div className="flex mb-4">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-l-lg text-sm focus:outline-none focus:border-indigo-500 text-white placeholder-gray-400"
              />
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-r-lg transition-colors duration-300">
                Subscribe
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-gray-700 rounded-lg ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-sm">Secure payments with:</span>
              <div className="flex space-x-2">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="bg-gray-700 p-1.5 rounded">
                    <method.icon className="w-5 h-5 text-gray-300" />
                    <span className="sr-only">{method.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Copyright */}
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} Sasta Bazar. All rights reserved.
              </p>
            </div>
            
            {/* Made with love */}
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <HiHeart className="text-red-500 mx-1 animate-pulse" />
              <span>by Sasta Bazar Team</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  )
}

export default Footer