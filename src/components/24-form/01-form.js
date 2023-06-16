import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const Form1 = () => {

    const [fullName, setFullName] =useState('');

    const handleChange = (e) =>{
        setFullName(e.target.value)
        
    }

  return(
    <Container>
        <h2>FORMLAR</h2>
        <form>
            <label htmlFor="fullName">NAME:</label>
            <input type="text" id='fullName' name='fullName'
            placeholder='Type your name'
            value={fullName}
            onChange={handleChange}/>
        </form>
    </Container>
  )
}

export default Form1