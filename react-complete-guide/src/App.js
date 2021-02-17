import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Thanh",age: 32},
      {name: "Toan",age: 29},
      {name: "Thuy",age: 26}
    ],
    otherState: "Some other value"
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName,age: 32},
        {name: "Toan Pham",age: 29},
        {name: "Thuy Tran",age: 26}
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: "Thanh Pham" ,age: 32},
        {name: event.target.value,age: 29},
        {name: "Thuy Tran",age: 26}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={() => this.switchNameHandler("Thanh H Pham")}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, "Thanh H Pham!")}
          changed={this.nameChangeHandler}
          />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div',{className:'App'}, React.createElement('h1',null, 'My name is Thanh Pham !'));
  }
}

export default App;
