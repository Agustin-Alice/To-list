import React, { Component } from 'react'
import './App.css';

const Inputs = (props) => {

  let list = []
  list.push(props.valores)
  
  
  return(
    <div >
      <input type = 'text' value = {list}/>
      <button>edit</button>
    
    </div>
    
     

  )
}



/*class Inputs extends Component{
  state  = {
    lista : []
    
  }
  
  edit = () => {
    alert("Quiere modificarlo?")
  }
  
  render() {
    return(
      <div>
        <input type= "text"
         value = {this.state.lista[0]}
        
        />
        <button onClick={this.edit}>Cambiar</button>
      </div>
      

    )}
}*/




class App extends Component {
  
  state = { 
    text: '',
    cant_items: 0
  }



  add = (event) => {

    const text = event.target.value
    this.setState({ text })

  }

  // el valor del input del componente Inputs tiene que ser el valor del state del componente padre. 
  agregar = (event) => {
    event.preventDefault()
    const cant_items = this.state.cant_items + 1
    this.setState({cant_items}) 


  }

  render() {
    return(
    
    <form className="App">
      <section className="App-left">
        {/*incluir condicion se renderiza el componente inputs la cantidad de click que tiene el state del componente app(componente padre).
        El valor de cada input puede ser sacado del state del componente en un array 
        
        */}
        
        <Inputs
        valores= {this.state.text}
        />
      
      
      </section>
      
      
      <section className="App-right">        
      <h1>To list</h1>
        <input
          type="text" 
          onChange={this.add}
          value={this.state.text}
        ></input> 
        <button onClick={this.agregar}>
          Submit
        </button>

        <h2>{this.state.text}</h2>
        <h3>{this.state.cant_items}</h3>
      </section>
    </form>
  
    )
  }
}

export default App;
