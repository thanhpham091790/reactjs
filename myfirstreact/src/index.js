import React from 'react';
import ReactDOM from 'react-dom';
import Car from './App.js';

class Garage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const brand = "Toyota";
        const carinfo = {
            name: "Ford",
            model: "Mustang"
        };
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <Car brand={carinfo} />
            </div>
        );
    }
}

const mycar = <Garage />;
ReactDOM.render(mycar,document.getElementById("root"));