

const InternalStyling = () => {
    const styleTitle ={
        color: 'green',
        fontSize: '2rem',
        fontWeight: 'bold',
        textAlign: 'center'
    }

    const stylePar = {
        ...styleTitle, color: 'aqua', fontSize: '1rem'
    }



  return (
    <div>
        <h2 style={styleTitle}>React Donguleri</h2>
        <p style={stylePar}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam assumenda magni impedit modi
             obcaecati sed facere officia fuga optio in.</p>
    
    
    
    
    </div>
  )
}

export default InternalStyling;