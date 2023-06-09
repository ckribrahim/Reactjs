import React, { useState } from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'

const State = () => {

  const [mode, setMode] = useState('light');

  let classNames = 'bg-dark text-light p-5';

  if(mode === 'light'){
    classNames = 'bg-light text-dark p-5';
  }



  return (
    <Container className={classNames} style={{height: 500}}>
        <h1>Dark / Light Mode</h1>
        <ButtonGroup>
            <Button variant='primary' onClick={()=>setMode('dark')}>Dark Mode</Button>
            <Button variant='success' onClick={()=>setMode('light')}>Light Mode</Button>
        </ButtonGroup>
    </Container>
  )
}

export default State