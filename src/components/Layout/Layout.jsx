import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Card from '../CardProduct/CardProduct'
import data from '../../data/datosproductos.js';
import { Container, Row, Col} from 'reactstrap';
import './Layout.css'


const Layout = () => {
 
 return <> 
 
  <Header />
   <Container>

     <Col>
        <Row>

       {data.map(product =>

         <Card
           key={product.name}
           name={product.name}
           precio={product.precio}
           categoria={product.categoria} 
           imagen={product.url}
         />
       )}
       </Row>
     </Col>

   </Container>
  
  <Footer />
  
  </>
}

export default Layout