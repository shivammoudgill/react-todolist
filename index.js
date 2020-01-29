import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      listOfTodo: []

    };
  }
  handleChangeOfName = event => {
    console.log(this.state.name);
    this.setState({
      name: event.target.value,
    });
  };
  addToDo = () => {
    this.setState({
      listOfTodo: [...this.state.listOfTodo, this.state.name],
      name: ""
    })
  }
  delete = (value) =>{
    alert(value);
    let filtered = this.state.listOfTodo.filter((eachItem) => {
      return eachItem != value
    }
    )
    this.setState({
      listOfTodo: filtered
    })
  }
  render() {
    return (
      <div>
      <h1>TO DO LIST</h1>
          <input
          type="text"
          onChange={event => this.handleChangeOfName(event)}
          value={this.state.name}
          placeholder="Enter name..."
        />
        <button onClick={this.addToDo}> Add </button>
                <h1>Value  {this.state.name}</h1>
{
  this.state.listOfTodo.map(eachElm => (
    <li>{eachElm} <button onClick={() => this.delete(eachElm)}>Delete</button></li>
  ))
}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));