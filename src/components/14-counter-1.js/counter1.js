import React, { useState } from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'

const Counter1 = () => {
    const [counter, setCounter]= useState(0);




  return (
    <Container className='p-5'>
        <h1 >Counter1</h1>
        <ButtonGroup  className='p-2'>
            <Button variant='danger' onClick={()=>setCounter(prev => prev-1)}>-</Button>
            <Button disabled>{counter}</Button>
            <Button variant='success' onClick={()=>setCounter(prev => prev+1)}>+</Button>
            <Button variant='info' onClick={()=>setCounter(0)}>Reset</Button>
        </ButtonGroup>
    </Container>
  )
}

export default Counter1