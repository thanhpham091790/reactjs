import React from 'react';
import ReactDOM from 'react-dom';
import Car from './App.js';

class Garage extends React.Component{
    render() {
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <Car style="good" />
            </div>
        )
    }
}

function Car1(){
    return <h2>Hi, I am a car1!</h2>;
}

ReactDOM.render(<Garage />,document.getElementById("root"));