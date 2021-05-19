import { render } from '@testing-library/react';
import React, { Component } from 'react'
import './App.css';
 
const Inputs = (props) => {  
  /*list.map((texto) => {
    
  })*/
      const { valores} = props

      valores.forEach((valor) => {
        return(
          <div>
            <input
            type = 'text'
            value = {valor}
            />
            <button>edit</button>
          
          </div>
        )

      })
        
      
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
    list: []
  }

  add = (event) => {

    const text = event.target.value
    this.setState({ text })

  }

  // el valor del input del componente Inputs tiene que ser el valor del state del componente padre. 
  agregar = (event) => {
    event.preventDefault()
    this.state.list.push(this.state.text)
    const list = this.state.list
    this.setState({ list })
  }

  render() {
    return(
    
    <form className="App">
       <section className="App-left">       
        <Inputs
        valores= {this.state.list}
        />
      <div>{this.state.list}</div>
      
      </section>
      
      
      <section className="App-right">        
      <h1>To list</h1>
        <input
          type="text" 
          onChange={this.add}
        ></input> 
        <button onClick={this.agregar}>
          Submit
        </button>
      </section>
    </form>
  
    )
  }
}

export default App;
