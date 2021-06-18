import { render } from '@testing-library/react';
import React, { Component } from 'react'
import './App.css';
 

class App extends Component {

  state = {
    text: '',
    list: [],
    lista: [],
    
  }

  add = (event) => {
    const text = event.target.value
    this.setState({ text })

  }

  agregar = (event) => {
    event.preventDefault()
    let {list, text, lista} = this.state    
    lista.push(text)
    list = lista.map((item, index) => {
      item = ({name: item, id:index})
      return item
    })
    this.setState({ list })
    this.setState({text:''})
    
  }

  actualizar = (valores) => {
    let list = valores
    this.setState({ list})
    console.log(list)   
  }


  render() {
    return(
    
    <form className="App">
       <section className="App-left">    
        <Items
        type='text'
        valores= {this.state.list}
        onChange= {this.actualizar}
        />      
      </section>
      
      
      <section className="App-right">        
      <h1>To list</h1>
        <input
          type='text'
          onChange={this.add}
          value={this.state.text}
        /> 
        <button onClick={this.agregar}>
          Submit
        </button>
      </section>
    </form>
  
    )
  }
}

class Items extends Component {

  edit = (event) => {
    event.preventDefault()
    let cambio = prompt('Que queres poner?')
    var {valores} = this.props
    console.log(event.target.id)
    valores[event.target.id].name = cambio
    this.props.onChange(valores)
  }
  
  render(){
    var {valores} = this.props
    const result = valores.map((valor) => {
      return(
        <div>
          <input
          type = 'text'
          value = {valor.name}
          />
          <button
          onClick = {this.edit}
          id = {valor.id}
          >edit</button>
        </div>
        
      )
    }) 
    return (result)
  }
  
}


export default App;