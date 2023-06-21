import React from 'react'
import { Container } from 'react-bootstrap'
import {useFormik} from 'formik'
import * as Yup from 'yup'

const FormikYup1 = () => {

  const initialValues = {
    firstName: '',

  };

  const validationSchema = Yup.object({
    firstName: Yup.string().min(5, '5 karakterden az olamaz').required('Required'),
  });

  const onSubmit =( values) => {
      console.log(values)
  }

  const formik = useFormik({

    initialValues,
    validationSchema,
    onSubmit

  })

    


  return (
    <Container>
      <h2>Formik & Yup - 1</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">Adiniz</label> 
        <br />
        <input type="text" id='firstName' name='firstName' placeholder='Type your name'
        // value = {formik.values.firstName}
        // onChange = {formik.handleChange}
        // onBlur={formik.handleBlur}
        {...formik.getFieldProps('firstName')}
        />
        <br />
        {
          formik.touched.firstName && formik.errors.firstName ? 
            <div style={{color: 'red'}}>{formik.errors.firstName}</div> : null
          
        }
        <button type='submit'>Send</button>
      </form>
    </Container>
  )
}

export default FormikYup1