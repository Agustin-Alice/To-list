import React, { Component } from 'react'


class TodoItems extends Component {

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

export default TodoItems;
