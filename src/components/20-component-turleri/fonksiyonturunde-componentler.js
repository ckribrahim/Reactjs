import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap';

const FonksiyonTurunde = () => {

  const[name, setName] = useState();
  const [location, setLocation] = useState();
  const [counter, setCounter] = useState(0);

  useEffect(()=>{
      console.log('FTC: component ilk mount edildiginde calisir')
      return ()=>{
        console.log('FTC: component unmount edildiginde calisir')
      }
  },[])

  useEffect(()=>{
      console.log('FTC: component update edildiginde calisir')
     
  })

  useEffect(()=>{
    console.log('FTC: name state i degistiginde calisir')
   
}, [name])


  console.log('FTC: Ilk burasi calisir' )
  return (
    <Container>
    <h2>Fonksiyon Turunde Componentler</h2>
    <p>{name}</p>
    <Button onClick={()=>setName('Bravo Six')}>Change Name</Button>
    <p>{counter}</p>
    <Button onClick={()=> setCounter(prevValue => prevValue+1)}>Artir</Button>
</Container>
  )
}

export default FonksiyonTurunde