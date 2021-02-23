import React, { Component } from 'react';
import classes from './App.module.css';

import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { id: 'sfdf', name: "Thanh", age: 32 },
      { id: 'dsfdsf', name: "Toan", age: 29 },
      { id: 'erere', name: "Thuy", age: 26 }
    ],
    otherState: "Some other value",
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });

  }

  render() {
    let btnClass = '';

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    let assignClasses = [];
    if (this.state.persons.length <= 2) {
      assignClasses.push(classes.Red);
    }
    if (this.state.persons.length <= 1) {
      assignClasses.push(classes.Bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
