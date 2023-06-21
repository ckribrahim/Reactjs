import React, { useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap';

const UseRef = () => {
    const emailRef = useRef(null);
    const buttonRef = useRef(null);
  

    const hanleFocus = () => {
        console.log(emailRef.current.value)
        emailRef.current.focus();
        buttonRef.current.style.backgroundColor = 'green'
        
    }

  

  return (
    <Container className='mt-5'>
        <Form>
            <Form.Control  type='email' placeholder='Mailinizi giriniz..'
            ref={emailRef} className='mb-5'
            />
            <Button ref={buttonRef} type='button' onClick={hanleFocus}>SET FOCUS</Button>
        </Form>
    </Container>
  )
}

export default UseRef