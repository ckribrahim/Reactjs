import React from 'react'
import { Button } from 'react-bootstrap'

const Child = (props) => {

    // const increaseCounter = () =>{
    //     props.handleCounter(1);
    // }

    // const increaseCounter = () =>{
    //          props.setCounter(prev => prev +1)
    //  }



  return (
    <div>
        <h2>Cift Yonlu Veri Aktarimi</h2>
        {/* <Button variant='success' onClick={()=>props.handleCounter(2)}>
            Arttir
        </Button> */}
        <Button variant='success' onClick={()=>props.setCounter(prev =>prev+1)}>
            Arttir
        </Button>
        {/* <Button variant='success' onClick={increaseCounter}>
            Arttir
        </Button> */}
    </div>
  )
}

export default Child