import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: "Thanh",age: 32},
      {name: "Toan",age: 29},
      {name: "Thuy",age: 26}
    ]
  });

  const [otherState, setOtherState] = useState({
    otherState: "Some other value"
  });

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: "Thanh Pham",age: 32},
        {name: "Toan Pham",age: 29},
        {name: "Thuy Tran",age: 26}
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}


export default App;
