
import { Component } from "react";
import { Button, Container } from "react-bootstrap";


class ClaTurunde extends Component {

   
    constructor(props){
        super(props);
        this.state ={
            name: 'Simon',
            location: 'Langley, Virginia',
            counter: 0
            
        }
    }

    componentDidMount(){
        console.log('CTC: component ilk mount edildiginde calisir')
    }

    componentWillUnmount(){
        console.log('CTC: component unmount edildiginde calisir')
    }
    componentDidUpdate(prevProps, prevState ){
        console.log('CTC: component update edildiginde calisir')

        if(prevState.name !== this.state.name){
            alert("name state' i degisti")
        }
    }
  
    render(){
        console.log('CTC: ilk burasi calisir')
        
        return(
            <Container>
                <h2>Class Turunde Componentler</h2>
                <p>{this.state.name}</p>
                <Button onClick={()=>this.setState({name: 'Bravo Six'})}>Change Name</Button>
                <p>{this.state.counter}</p>
                <Button onClick={()=> this.setState(prevState =>{
                    return{
                        counter: prevState.counter + 1
                    }
                })}>Artir</Button>
            </Container>
        )
    }
}

export default ClaTurunde

