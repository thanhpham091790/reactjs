import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component{
    render(){
        return <h2>Hi, I am a beautiful {this.props.brand} !</h2>;
    }
}

export default Car;