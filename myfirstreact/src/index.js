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
        return <h2>Hi, I am a {this.props.style} car!</h2>;
    }
}

class Garage extends React.Component{
    render() {
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <Car style="brand new" />
            </div>
        )
    }
}

function Car1(){
    return <h2>Hi, I am a car1!</h2>;
}

ReactDOM.render(<Garage />,document.getElementById("root"));