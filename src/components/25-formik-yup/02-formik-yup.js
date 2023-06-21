import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import * as Yup from 'yup'

const FormikYup2 = () => {

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        id: ''
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().min(2, 'Name must be 2 characters').required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
            .min(6, 'Password must be 6 characters')
            .max(15, 'Password must be maximum 15 characters')
            .required('Required'),
    });

    const onSubmit = async (values) => {
        console.log('Form data', values)
        
        const dto ={
            id: values.id,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password
        }

        try {
            const resp =  await axios.put(`https://648a1ac75fa58521cab0d225.mockapi.io/api/v1/login/${values.id}`, values)
        } catch (error) {
            console.log(error.message)
        }
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: onSubmit
    })


    return (
        <Container>
            <h2>Formik & Yup — 2</h2>
            <p>*Doldurulmasi zorunlu alanlar.</p>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group>
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                        type='number'
                        name='id'
                        placeholder="Lutfen id'nizi giriniz..."
                        {...formik.getFieldProps('id')}
                        required
                    />
                    
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>First Name*</Form.Label>
                    <Form.Control
                        type='text'
                        name='firstName'
                        placeholder="Lutfen isminizi giriniz..."
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isValid={formik.touched.firstName && !formik.errors.firstName}
                        isInvalid={formik.touched.firstName && formik.errors.firstName}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.firstName}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type='text'
                        name='lastName'
                        placeholder="Lutfen soyisminizi giriniz..."
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isValid={formik.touched.lastName && !formik.errors.lastName}
                        isInvalid={formik.touched.lastName && formik.errors.lastName}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.lastName}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='email'
                        name='email'
                        placeholder="Lutfen email adresinizi giriniz..."
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isValid={formik.touched.email && !formik.errors.email}
                        isInvalid={formik.touched.email && formik.errors.email}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.email}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        name='password'
                        placeholder="Lutfen sifrenizi giriniz..."
                        {...formik.getFieldProps('password')}
                        isValid={formik.touched.password && !formik.errors.password}
                        isInvalid={formik.touched.password && formik.errors.password}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formik.errors.password}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button className='mt-3'>
                    SEND
                </Button>
            </Form>
        </Container>
    )
}

export default FormikYup2