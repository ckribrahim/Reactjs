import React from 'react'
import Welcome1 from './02-welcome'
import Welcome2 from './03-welcome'
import Welcome3 from './04-welcome3'

const Greetings = () => {
  return (
    <div>
      <Welcome1 name='Simon' lastName='Riley' disabled desc='Who am I?' />
      <Welcome1 name='Cpt' lastName='Price'  desc='Who am I?' />
      <Welcome2  name = 'Cpt' lastName='Ghost'/>
      <Welcome3 name='Cpt' lastName='Grey'/>
    </div>
  )
}

export default Greetings