import React, { useState } from 'react'
import { Button, ButtonGroup, Container, Row } from 'react-bootstrap'
import peopleData from "../../assets/data/people.json"
import Person from './person';

const Birthday = () => {

    const [people, setPeople] = useState(peopleData);

    const deletePerson = (id) =>{
        const arr = (people.filter(person => person.id !== id))
        setPeople(arr);
    }
  


  return (
    <Container>
        <h2>Bugun Olenler</h2>
        <p>
            Bugun olen {people.length} kisi var..
        </p>
        <Row>
        {
            people.map(person => (<Person key={person.id} {...person}
            deletePerson = {deletePerson}/>))
        }
        </Row>
        <ButtonGroup>
        <Button variant='danger' onClick={()=>setPeople([])}>
            Hepsini Temizle
        </Button>
        <Button variant='success' onClick={()=>setPeople(peopleData)}>
            Verileri Getir
        </Button>
        </ButtonGroup>
    </Container>
  )
}

export default Birthday