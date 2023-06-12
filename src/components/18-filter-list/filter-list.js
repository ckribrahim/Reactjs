
import { useState } from 'react'
import { Container, Form, ListGroup } from 'react-bootstrap'
import data from '../../assets/data/students.json'

const FilterList = () => {

    const [search, setSearch] = useState('');

    const filteredStd = search === '' ? data : 
    data.filter(std => std.name.toLowerCase().includes(search.toLowerCase()));






  return (
    <Container>
        <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Isme gore listele</Form.Label> 
              <Form.Control type='text' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Ara...'/>


            </Form.Group>
        </Form>
        <ListGroup>
            {
                filteredStd.map((std)=>(
                    <ListGroup.Item key={std.id} className='d-flex text-center'>
                        <p className='col-8 text-start m-0'>{std.name}</p>
                        <p className='col-2 m-0'>{std.age}</p>
                        <p className='col-2 m-0'>{std.grade}</p>
                        

                    </ListGroup.Item>
                ))
            }
        </ListGroup>
    </Container>
  )
}

export default FilterList