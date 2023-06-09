import React from 'react'
import './02-image-gallery.scss'
import images from '../../assets/data/images.json'

const ImageGallery = () => {

    console.log(images)

  return (
    <div className='image-gallery'>
        {
            images.map((img)=>(
            <div key = {img.title}>
                <img src={require(`../../assets/img/${img.name}`)} 
                alt={img.title} 
                title={img.title} />
            </div>))
        }
    </div>
  )
}

export default ImageGallery