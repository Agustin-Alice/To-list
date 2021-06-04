import { render } from '@testing-library/react';
import React, { Component } from 'react'
import './App.css';
 
const Inputs = (props) => {
  const {valores} = props
  const modify = (event) => {
    event.preventDefault()
    prompt('Que mierda queres poner?', )
    //onSend
  }
  let result = valores.map((valor) => {
    return(
      <div>
        <input
        type = 'text'
        value = {valor}
        />
        <button
        onClick = {this.modify}
        >edit</button>
      </div>
      
    )
  }) 
  return result
}


class App extends Component {

  state = { 
    text: '',
    list: []
  }

  add = (event) => {

    const text = event.target.value
    this.setState({ text })

  }

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
