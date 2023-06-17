import React, { useState } from 'react'
import {  Button, Container, Form } from 'react-bootstrap'

const Form4 = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: '',
        terms: false
    })

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setFormData(prev=> ({
            ...prev,
            [e.target.name]: value
        }))
     };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

    }




    return (
        <Container>
            <h2>Form - Practise 2</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name"
                        value={formData.firstName}
                        name='firstName'
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name"
                        value={formData.lastName}
                        name='lastName'
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email"
                        value={formData.email}
                        name='email'
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Phone Number"
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Gender</Form.Label>
                    <Form.Group>
                        <Form.Check
                            label='other'
                            type="radio"
                           
                            name='gender'
                            value='other'
                            onChange={handleChange}
                            inline
                        />
                        
                        <Form.Check
                            label='female'
                            type="radio"
                           
                            name='gender'
                            id='female'
                            value='female'
                            onChange={handleChange}
                            inline
                        />
                       
                        <Form.Check
                            label='male'
                            type="radio"
                            
                            name='gender'
                            id='male'
                            value='male'
                            onChange={handleChange}
                            inline
                        />
                    </Form.Group>
                </Form.Group>
                <Button className='m-3' type='submit'>Send</Button>
                <Form.Group>
                    <Form.Check
                        type="checkbox"
                        label="Agree to terms and conditions"
                        name='terms'
                        checked = {formData.terms}
                        onChange={handleChange}
                    />
                </Form.Group>
            </Form>
        </Container>
    )
}

export default Form4