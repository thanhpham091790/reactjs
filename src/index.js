import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component{
    render(){
    return <h2>I'm a {this.props.color} {this.props.brand} Car!</h2>
    }
}

ReactDOM.render(<Car color="silver" brand="Toyota" />, document.getElementById("root"));