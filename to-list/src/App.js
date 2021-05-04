import React, { Component } from 'react'
import './App.css';

class Inputs extends Component{
  render() {
    return(
      <input type= "text"> </input>,
      <button>Cambiar</button>
    
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


  agregar = (event) => {
    event.preventDefault()
      this.setState({
      
    })
  }






  render() {
    return(
    
    <form className="App">
      <section className="App-left">
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
        <h3>{this.state.listado}</h3>
      </section>
      
      
      <section className="App-right">
        <Inputs/>
        


      </section>
    </form>
  
    )
  }
}

export default App;
