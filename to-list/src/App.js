import React, { Component } from 'react'
import './App.css';

class Inputs extends Component{
  state  = {
    lista : ['']
    
  }
  
  edit = () => {
    alert("Quiere modificarlo?")
  }
  
  render() {
    return(
      <div>
        <input type= "text" value = {this.state.lista}></input>
        <button onClick={this.edit}>Cambiar</button>
      </div>
      

    )}
}




class App extends Component {
  
  state = { 
    variable: ''
  }



  add = (event) => {

    const variable = event.target.value
    this.setState({ variable })

  }

  // este metodo tiene que usar el componente Inputs en la otra section app-Left.
  // el valor del input del componente Inputs tiene que ser el valor del state del componente padre.
  // 
  agregar = (event) => {
    event.preventDefault()

//    return(<Inputs/>)

  }

  render() {
    return(
    
    <form className="App">
      <section className="App-left">
        <Inputs/>
      
      
      </section>
      
      
      <section className="App-right">        
      <h1>To list</h1>
        <input
          type="text" 
          onChange={this.add}
          value={this.state.variable}
        ></input> 
        <button onClick={this.agregar}>
          Submit
        </button>

        <h2>{this.state.variable}</h2>

      </section>
    </form>
  
    )
  }
}

export default App;
