const Jsx1 = () =>{

    const name = "Cpt Grey"

    const user = {
        name: "John",
        age: 30
    };

    return (
        <>
            <p>Special Air Service & Bravo Six {name}</p>
            <p>Ideas are bulletproof</p>
            {/* 
              It's a comment line
            */}
            <h2>User Informations</h2>
            <p>Username: {user.name}</p>
            <p>Age: {user.age}</p>
        </>
    )
}

export default Jsx1;