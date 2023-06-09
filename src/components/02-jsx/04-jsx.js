

const Jsx4 = () => {
    const names = ["Maria Rodriguez", "Michael Chen", "Sarah Kim", "Ahmed Hassan"];
    const cities = ["Miami", "Toronto", "Seoul", "Cairo"];
    names.map((name)=>{
        return <p>{name}</p>
    })
    return (
        <div>
            <ul>
                {
                    names.map((name, idx)=> <li key={idx}>{name}</li> )
                }
            </ul>
            <select>
                {
                    cities.map((city, idx)=> <option key={idx}>{city}</option>)
                }
            </select>
        </div>
    )
    
  
}

export default Jsx4;