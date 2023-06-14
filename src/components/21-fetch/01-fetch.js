import { useEffect, useState } from 'react'
import { Container, ListGroup } from 'react-bootstrap';

const Fetch = () => {
    const [users, setUsers] = useState([]);

    const getMyUserData = async () => {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(data => {
        //         users = data
        //         console.log(data);
        //     })
        //     .catch(error => console.log(error));

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
    };

 

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                console.log(data);
            })
            .catch(error => console.log(error))
    }, [])

    

    return (
        <Container>
            <h2>Fetch</h2>
            <ListGroup>
                {
                    users.length > 0 && users.map((user, index) => {
                        return (
                            <ListGroup.Item key={index}>
                                {user.name}
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
            <h2>HELLO</h2>
        </Container>
    )
}

export default Fetch;
