import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component{
    constructor(){
        super();
        this.state = {color:"silver"};
    }
    render(){
    return <h2>I am a {this.state.color} Car!</h2>
    }
}
ReactDOM.render(<Car />, document.getElementById("root"));