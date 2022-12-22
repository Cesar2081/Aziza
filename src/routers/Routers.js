import React from 'react'

import {  Route, Routes, Navigate } from "react-router-dom"

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login.jsx'
import ProductDetails from '../pages/ProductDetails'
import Shop from '../pages/Shop'
import Signup from '../pages/Signup'

const Routers = () => {
  return <Routes>                  
    <Route path='/' element={<Navigate to='/Home' />}  />
    <Route path='home' element={<Home />} />
    <Route path='shop' element={<Shop />} />
    <Route path='shop/:id' element={<ProductDetails />} />
    <Route path='cart' element={<Cart />} />
    <Route path='checkout' element={<Checkout />} />
    <Route path='login' element={<Login />} />
    <Route path='Signup' element={<Signup />} />
  </Routes>
}

export default Routers