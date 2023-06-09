import React from 'react'

const Jsx3 = () => {
    const user = {
        name: 'John',
        age: 30,
        job: 'SAS',
        occupation: 'Bravo Six'
    }
    const err = true;


  return (
    <div>
        {
            user.age>=18 && <h3>Bu icerik 18 yasindan buyuklere ozel</h3>
        }
        {
            user.age > 18 || <h2>Are u serious?</h2>
        }
        {
            err && <p>There is a mistake</p>
        }
    </div>
  )
}

export default Jsx3;