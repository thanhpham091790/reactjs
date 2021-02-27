import React, { Component } from 'react';
import classes from './App.module.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass.js';
import Auxi from '../hoc/Auxi';


class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      persons: [
        { id: 'sfdf', name: "Thanh", age: 32 },
        { id: 'dsfdsf', name: "Toan", age: 29 },
        { id: 'erere', name: "Thuy", age: 26 }
        ],
        otherState: "Some other value",
        showPersons: false,
        showCockpit: true
    };
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[App.js] getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

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

    console.log('[App.js] render');

    let persons = null;
    let cockpit = null;
    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons} 
                    clicked={this.deletePersonHandler} 
                    changed={this.nameChangeHandler}/>;
    }
    if(this.state.showCockpit){
      cockpit = <Cockpit title={this.props.appTitle}
                showPersons={this.state.showPersons}
                personsLength={this.state.persons.length} 
                clicked={this.togglePersonsHandler} />
    }

    return (
      <Auxi>
        <button onClick={()=>{this.setState({showCockpit:false});}}>Toggle Cockpit</button>

        {cockpit}

        {persons}
      </Auxi>
    );
  }
}

export default withClass(App, classes.App);
