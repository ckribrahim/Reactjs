import React from 'react'
import './06-product-car.scss'

const ProductCard = (props) => {
  return (
    <div className='product-card'>
        {props.name}
        {props.children}
    </div>
  )
}

export default ProductCard