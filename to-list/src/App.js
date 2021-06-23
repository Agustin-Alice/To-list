import React, { Component } from 'react'
import './App.css';
import TodoItems from'./components/TodoItems';

class App extends Component {

  state = {
    text: '',
    list: [],
  }

  onCreateTodoChange = (event) => {
    const text = event.target.value
    this.setState({ text })
  }

  createTodo = (event) => {
    event.preventDefault()
    this.setState((prevState) => {
      return {  list: [...prevState.list, prevState.text] }
    })
    this.setState({text:''})

  }

  actualizar = (newEditedTodoText, i) => {
    console.log(newEditedTodoText, i)
    this.setState((prevState) => {
      return { list: [...prevState.list.slice(0, i), newEditedTodoText, ...prevState.list.slice(i + 1, prevState.list.length)] }
    })
  }


  render() {
    return(
    
    <div className="App">
       <section className="App-left">    
        <TodoItems
        type='text'
        valores= {this.state.list}
        onChange= {this.actualizar}
        />      
      </section>
      
      
      <form className="App-right">
        <h1 className= 'App-right__h1'>To list</h1>
        <input
        className='App-right__input'
          type='text'
          onChange={this.onCreateTodoChange}
          value={this.state.text}
        /> 
        <button onClick={this.createTodo} type="submit">
          Submit
        </button>
      </form>
    </div>
  
    )
  }
}

class Items extends Component {

  edit = (event) => {
    event.preventDefault()
    let cambio = prompt('Que queres poner?')
    this.props.onChange(cambio, parseInt(event.target.id))
  }
  
  render(){
    var {valores} = this.props
    console.log(valores)
    const result = valores.map((valor, index) => {
      return(
        <div key={index}>
          <input
          type = 'text'
          value = {valor}
          />
          <button
          onClick={this.edit}
          id = {index}
          >edit</button>
        </div>
        
      )
    }) 
    return (result)
  }
  
}


export default App;