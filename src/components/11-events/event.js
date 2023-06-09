import React from 'react'
import {  Button, Container } from 'react-bootstrap'

const Events = () => {
    const parametresizFonk = () =>{
        alert('Parametresiz fonksiyon calisti')
    }

    const parameterFonk = (param)=>{
        alert(`Parametreli fonksiyon tetiklendi. Parametre: ${param}`)
    }
  return (
    <Container className='d-flex gap-3 mt-3'>
        <Button variant='success' onClick={parametresizFonk}>
            Parametresiz
        </Button>
        <Button variant='info' onClick={()=>parameterFonk("Hi There")}>
            Parametreli
        </Button>
    </Container>
  )
}

export default Events