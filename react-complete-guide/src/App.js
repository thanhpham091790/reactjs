import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name="Thanh" age="31" />
        <Person name="Thuy" age="26">My Hobbies: Racing</Person>
        <Person name="Toan" age="28" />
      </div>
    );
    // return React.createElement('div',{className:'App'}, React.createElement('h1',null, 'My name is Thanh Pham !'));
  }
}

export default App;
