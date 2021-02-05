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

export default Car;