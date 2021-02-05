import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component{
    constructor(){
        super();
        this.state = {
            color: "red"
        };
    }
    render(){
        return <h2>Hi, I am a {this.state.color} car!</h2>;
    }
}

function Car1(){
    return <h2>Hi, I am a car1!</h2>;
}

ReactDOM.render(<Car />,document.getElementById("root"));