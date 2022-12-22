import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'
import Card from '../CardProduct/CardProduct'


const Layout = () => {
  return <>
  <Header />
  <Card />
  <div>
    <Routers />
  </div>
  <Footer />
  
  </>
}

export default Layout