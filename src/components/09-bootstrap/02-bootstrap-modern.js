import React from 'react'
import { Alert, Button, Col, Container, Row } from 'react-bootstrap'

const BootstrapModern = () => {
  return (
    <Container>
        <h2>Boostrap Modern Yontem</h2>
        <Alert variant='warning'>Warning Message</Alert>
        <Row className='text-center'>
            <Col>H</Col>
            <Col>E</Col>
            <Col>L</Col>
            <Col>L</Col>
            <Col>O</Col>
        </Row>
        <Button variant='outline-success'>Go to Hell</Button>
    </Container>
  )
}

export default BootstrapModern