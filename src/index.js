import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
    render() {
        return <h2>I'm a {this.props.carInfo.color} {this.props.carInfo.brand} Car!</h2>
    }
}

class Garage extends React.Component{
    render(){
        const carInfo = {
            color: "Yellow",
            brand: "Vinfast"
        };
        return(
            <div>
                <h1>Who lives in my Garage ?</h1>
                <Car carInfo={carInfo} />
            </div>
        );
    }
}

ReactDOM.render(<Garage />, document.getElementById("root"));