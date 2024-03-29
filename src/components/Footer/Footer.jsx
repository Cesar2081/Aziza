import React from 'react'
import './Footer.css';

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4' className='mb-4' md='6'>
          <div className="logo">
                            
              <div>
                <h1 className='text-white'>Multimart</h1>                
              </div>
            </div>
              <p className="footer__text mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed saepe tempora nobis tempore quos aperiam dolores assumenda quidem deleniti vel!
              </p>

            
          </Col>

        <Col lg='3' md='3' className='mb-4'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title">
              Categorias
            </h4>
            <ListGroup className='mb-3'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <Link to='#'>Bebés</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <Link to='#'>Hogar</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <Link to='#'>Relojes</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <Link to='#'>Smart Watches</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

          <Col lg='2' md='3' className='mb-4'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title">
              Userfil Links
            </h4>
            <ListGroup className='mb-3'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <Link to='/shop'>Tienda</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <Link to='/cart'>Cart</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <Link to='login'>Login</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <Link to='#'>Politicas de Privacidad</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
          </Col>

          <Col lg='3' md='4' >
          <div className="footer__quick-links">
            <h4 className="quick__links-title">
              Contact
            </h4>
            <ListGroup className='mb-3 footer__contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-map-pin-line"></i></span>
                <p>36ava entre Portete y Venezuela, Guayas, Guayaquil</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-phone-line"></i></span>
                <p>+593 098594336</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-mail-line"></i></span>
                <p>disremiadm@gmail.com</p>
              </ListGroupItem>
              
            </ListGroup>
          </div>
          </Col>
          <Col lg='12'>
            <p className="footer__copyright">Copyright {year} developed by 
             Cesar Garcia. All rights reserved.
             </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer