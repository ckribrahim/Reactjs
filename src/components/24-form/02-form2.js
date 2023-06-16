import React, { useEffect, useState } from 'react'
import { Container, Form } from 'react-bootstrap'

const Form2 = () => {

    const [num1, setNumber1] = useState(0);
    const [num2, setNumber2] = useState(0);
    const [num3, setNumber3] = useState(0);

    useEffect(()=> {
        setNumber3(+num1 + +num2)
    },[num1, num2])





  return (
    <Container>
        <Form>
            <Form.Group>
                <Form.Label>First Number</Form.Label>
                <Form.Control
                type="number" 
                placeholder="First Number"
                value={num1} 
                onChange={(e) =>setNumber1(+e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Second Number</Form.Label>
                <Form.Control
                type="number" 
                placeholder="Seconder Number"
                value={num2} 
                onChange={(e) =>setNumber2(+e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Total:</Form.Label>
                <Form.Control
                type="number" 
               
                value={num3} 
                disabled/>
            </Form.Group>
        </Form>
    </Container>
  )
}

export default Form2