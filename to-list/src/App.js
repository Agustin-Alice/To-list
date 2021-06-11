import { render } from '@testing-library/react';
import React, { Component } from 'react'
import './App.css';
 

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
    let {list, text} = this.state    
    var lista = [] 
    lista.push(text)
    list = lista.map((item, index) => {      
      item = ({name: item, id:index})
      return item
    })   
    console.log(list)
    this.setState({ list })
  }


  render() {
    return(
    
    <form className="App">
       <section className="App-left">    
        <Items
        type='text'
        valores= {this.state.list}
        />      
        <div>
          {this.state.list}
        </div>
      </section>
      
      
      <section className="App-right">        
      <h1>To list</h1>
        <input
          type='text'
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

class Items extends Component {

  state = {
    cambio: '',
  
  }

  edit = (event) => {
    event.preventDefault()
    let cambio = prompt('Que queres poner?')
    this.setState({ cambio })
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




/*const Inputs = (props) => {
  const {valores} = props
  const funtion = (event) => {
    event.preventDefault()
    let cambio = prompt('Que mierda queres poner?')
    
  }
  let result = valores.map((valor) => {
    return(
      <div>
        <input
        type = 'text'
        value = {valor}
        />
        <button
        onClick = {funtion}
        >edit</button>
      </div>
      
    )
  }) 
  return result
}*/
