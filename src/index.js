import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
    render() {
        return <h2>I'm a {this.props.color} {this.props.brand} Car!</h2>
    }
}

class Garage extends React.Component{
    render(){
        const color="red";
        const brand="Ford";
        return(
            <div>
                <h1>Who lives in my Garage ?</h1>
                <Car color={color} brand={brand} />
            </div>
        );
    }
}

ReactDOM.render(<Garage />, document.getElementById("root"));