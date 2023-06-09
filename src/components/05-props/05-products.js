import React from 'react'
import ProductCard from './06-product-car'

const Products = ({children}) => {
  return (
    <div>
        <ProductCard name ='Grey'>
            <h2>Sony Display</h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Error rerum autem odio totam vero recusandae.

        </ProductCard>    
        <ProductCard name ='Ghost'>
            <h2>Intel Processor</h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Error rerum autem odio totam vero recusandae.

        </ProductCard>    
    </div>
  )
}

export default Products