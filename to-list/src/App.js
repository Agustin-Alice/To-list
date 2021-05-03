import React, { Component } from 'react'
import './App.css';
/*
function App() {
  return (
    
    <div className="App">
      <section className="App-left">
      <h1>To list</h1>
      <input type="text" placeholder={}></input> 
      </section>
      <section className="App-right">

      </section>
    </div>
  );
}
*/

class App extends Component {
  
  state = {
    listado: [],
    variable: ""
  
  
  }
  guardar = (event)=> {
    this.variable = event.target.value

  }
  agregar = () => {
    this.setState(state => ({
      listado: this.state.listado.push(this.guardar.variable)
    }))  
    console.log(this.variable)
    
  }

  render() {
    return(
    
    <div className="App">
      <section className="App-left">
        <h1>To list</h1>
        <input type="text" className="prueba" onChange={this.guardar} ></input> 
        <button
          onClick={this.agregar} 
        >
          Submit
        </button>
        <h1>{this.state.listado}</h1>
      </section>
      
      
      <section className="App-right">
      {/*iterar listado del state y agregar inputs dependiendo de la cantidad de posiciones */}


      </section>
    </div>
  
    )
  }
}

export default App;
