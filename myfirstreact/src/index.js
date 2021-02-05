import React from 'react';
import ReactDOM from 'react-dom';
import Car from './App.js';

class Garage extends React.Component{
    render(){
        const brand = "Toyota";
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <Car brand={brand} />
            </div>
        );
    }
}

const mycar = <Garage />;
ReactDOM.render(mycar,document.getElementById("root"));