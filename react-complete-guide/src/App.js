import React, { Component } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Thanh",age: 32},
      {name: "Toan",age: 29},
      {name: "Thuy",age: 26}
    ],
    otherState: "Some other value",
    showPersons: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this, "Thanh H Pham!")}
            changed={this.nameChangeHandler} />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style = {style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
