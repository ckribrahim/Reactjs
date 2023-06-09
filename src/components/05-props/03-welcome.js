import React from 'react'

const Welcome2 = (props) => {

    const {name, lastName} = props;
  return (
    <div>
        <h2>
            Welcome {name} {lastName}   
        </h2>
    </div>
  )
}

export default Welcome2