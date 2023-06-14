import React, { useEffect, useState } from 'react'

const Fetch2 = () => {

    const [user, setUser] = useState=([]);



    useEffect(() => {
        
        fetch('https://648a1ad15fa58521cab0d2df.mockapi.io/api/v1/users')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
           
        
    }, [])
    

  return (
    <div>Fetch2</div>
  )
}

export default Fetch2