import { CloseFullscreen } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { Alert, Button, ButtonGroup, Container } from 'react-bootstrap'

const UseEffect = () => {

    const [message, setMessage] = useState("");
    const [counter, setCounter] = useState(0);



    useEffect(()=>{
        console.log("MOUNTING: Sadece sayfa ilk render edildiginde calisir");
        const timer = setInterval(() => {
            console.log("timer calisti");
        }, 1000);

        return () => {
            clearInterval(timer);
        }
        
       
    },[]);

   

    useEffect(()=>{
        console.log('UPDATING: Sayfa ilk render ve her render edildiginde calisir') 
        return ()=>{
            console.log("UNMOUNTING: Sadece sayfa unmount edildiginde calisir")
        }  
    })

    useEffect(()=>{
       console.log('Updating: sayfa ilk render da ve message state i degistiginde calisir') 
    }, [message])


    console.log('UseEffectlerden once calisir')




  return (
    <Container>
      <h2>UseEffect</h2>
      <Alert>
        {message} - {}
      </Alert>
      <ButtonGroup>
        <Button variant="success" onClick={()=>setMessage("Error")}>Set Message</Button>
        <Button variant="danger">Throw Error</Button>
        <Button variant="primary"onClick={()=>setCounter(prev => prev+1)}>{counter}</Button>
      </ButtonGroup>
    </Container>
  )
}

export default UseEffect