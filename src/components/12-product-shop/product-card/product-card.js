import React from 'react'
import { Button, Card } from 'react-bootstrap'

const ProductCard = (props) => {

    const productImg = require(`../../../assets/img/${props.image}`)

    const {title, desc, price} = props;

    const addToCard  = () => { 
        alert(`${title} sepete eklendi`)
    }


  return (
    <Card className='h-100' style={{width:"300px"}}>
        <Card.Img variant='top' src={productImg}/>
        <Card.Body className='d-flex flex-column justify-content-between text-center'>
            <Card.Title className='fs-2'>{title}</Card.Title>
            <Card.Subtitle>
                {desc}
            </Card.Subtitle>
            <Card.Text className='fs-3 text-info'>
                {price}
            </Card.Text>
            <Button variant='warning' onClick={addToCard}>Add to cart</Button>
        </Card.Body>

    </Card>
  )
}

export default ProductCard