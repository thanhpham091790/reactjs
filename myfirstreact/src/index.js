import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component{
    render(){
        return <h2>Hi, I am a car!</h2>;
    }
}

function Car1(){
    return <h2>Hi, I am a car1!</h2>;
}

ReactDOM.render(<Car1 />,document.getElementById("root"));