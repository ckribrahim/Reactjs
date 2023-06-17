import axios from 'axios';
import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const Form3 = () => {

    const [form, setForm] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'xyc@gmail.com',
        phoneNumber: '77777'

    });

    const handleSubmit =  async (e) => { 
        e.preventDefault();
        const dto = {...form}
        await axios.post('https://ornek.com', dto)
     }



  return (
    <Container>
        <h2>Form - Practise</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="First Name"
                value={form.firstName}
                onChange={(e)=>setForm(prev => ({...prev, firstName: e.target.value}))} />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name"
                value={form.lastName}
                onChange={(e)=>setForm(prev => ({...prev, lastName: e.target.value}))} />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Email"
                value={form.email}
                onChange={(e)=>setForm(prev => ({...prev, email: e.target.value}))} />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Phone Number"
                value={form.phoneNumber}
                onChange={(e)=>setForm(prev => ({...prev, phoneNumber: e.target.value}))} />
            </Form.Group>
            <Form.Group>
                <Button type='submit'>
                    Send
                </Button>
            </Form.Group>
        </Form>
    </Container>
  )
}

export default Form3