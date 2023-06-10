import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import {Delete} from '@mui/icons-material'

const Person = (props) => {

    const {id, name, age,image} = props;

  return (
    <Card className='my-3' style={{width: '200px'}} >
       
            
                <Card.Img src={require(`../../assets/img/${image}`)}/>
            
            
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Age: {age}</Card.Text>
                    <Delete style={{cursor: 'pointer'}}
                    onClick = {()=>props.deletePerson(id)}
                    />
                </Card.Body>
          
        
    </Card>
  )

}

export default Person