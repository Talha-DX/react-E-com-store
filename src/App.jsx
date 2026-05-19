import React from 'react'
import NavBar from './Components/NavBar.jsx'
import Footer from './Components/Footer.jsx'

import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Products from './Pages/Products.jsx'
import Home from './Pages/Home.jsx'
import Cart from './Pages/Cart.jsx'

import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './Features/Product/Products.jsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App