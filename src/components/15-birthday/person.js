import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import {Delete} from '@mui/icons-material'

const Person = (props) => {

    const {} = props;

  return (
    <Card className='my-3'>
        <Row>
            <Col sm={4}>
                <Card.Img src={require('../../assets/img/person3.jpg')}/>
            </Col>
            <Col sm={8}>
                <Card.Body>
                    <Card.Title>Svetlana Gevorgyan</Card.Title>
                    <Card.Text>Age 27</Card.Text>
                    <Delete/>
                </Card.Body>
            </Col>
        </Row>
    </Card>
  )

}

export default Person