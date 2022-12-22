import React from 'react'
import './Header.css'

import {motion} from 'framer-motion';
import logo from '../..//assets/images/eco-logo.png';
import userIcon from '../../assets//images/user-icon.png';
import {Container , Row} from 'reactstrap';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    
    <header className="header">
    <Container>
      <Row>

          <div className="nav__wrapper">

            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Multimart</h1>                
              </div>
              
            </div>

           <div className="navigation">
              <ul className="menu">             
                 <Link to='/shop'>Home</Link>
                 <Link to='/shop'>Tienda</Link>
                 <Link to='/shop'>Contact</Link>    
                
                               
              </ul>
            </div>

            <div className="nav__icons">

              <span className='fav__icon'>
                <i class="ri-heart-line">
                  <span className="badge">1</span>
                </i>
              </span>

              <span className='cart__icon'>
                <i class="ri-shopping-bag-line">
                <span className="badge">1</span>
                </i>
              </span>

              <span><motion.img whileTap={{scale:1.2}} src={userIcon} alt="" /></span>
              
              <div className="mobile__menu">
                <span><i class="ri-menu-line"></i></span>
              </div>
            
            </div>
          </div>   
      </Row>
    </Container>
  </header>
  )
}

export default Header