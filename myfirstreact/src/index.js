import React from 'react';
import ReactDOM from 'react-dom';
import Car from './App.js';

class Garage extends React.Component{
    render() {
        return <h2>I am a {this.props.brand} !</h2>
    }
}

const mycar = <Garage brand="Toyota" />;

ReactDOM.render(mycar,document.getElementById("root"));