import React from 'react'


import {motion} from 'framer-motion';
import './CardProduct.css';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import figura from '../../assets/images/arm-chair-01.jpg';


const ProductCard = () => {

return (
    <Col lg='3' md='4' className='mb-2'>

    <div className="product__item">

        <div className="product__item">
            <motion.img whileHover={{scale: 0.9}} src={figura} alt="" />
        </div>

        <div className='p-2 product_info'>
            <h3 className="product__name">
                <Link to={`/shop/}`}>Hola</Link>
            </h3>
            <span>Categoria</span>
        </div>

        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
            <span className="price">$ 10.00</span>
            <motion.span whileHover={{scale:1.2}}><i class="ri-add-line"></i></motion.span>
        </div>
    </div>   
    
    </Col>
    
  )
}

export default ProductCard