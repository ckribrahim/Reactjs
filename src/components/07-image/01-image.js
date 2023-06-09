import React from 'react'
import Mountain from '../../assets/img/image4.jpg'

const Image1 = () => {
    const style ={
        margin: '1rem 1rem'
    }
  return (
    <div>
        {/* STATIC IMAGE */ }
        <img src="./image5.jpg" alt=""  style={style}/>


        {/* HARICI IMAGE*/}
        <img src="https://picsum.photos/seed/picsum/200/300" style={style} alt="" />

        {/* IMPORT IMAGE*/}

        <img src={Mountain} alt="" style={style} />

        {/* REQUIRE IMAGE*/}
        <img src={require('../../assets/img/image4.jpg')} alt=""  style={style} />
    </div>
  )
}

export default Image1