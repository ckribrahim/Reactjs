import React from 'react'

const Welcome1 = (props) => {
  return (
    <div>
      <h1>Welcome {props.name} {props.lastName} </h1>
      {
        props.disabled ||
        <p>
           {props.desc}
        </p>
        
      }
    </div>
  )
}

export default Welcome1