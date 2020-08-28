import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Toyota",
            model: "Camry",
            color: "Silver",
            year: "2017"
        };
    }

    changeColor = () =>{
        this.setState({
            color:"Black"
        });
    }

    render(){
        return(
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color} {this.state.model} from {this.state.year}.
                </p>
                <button type="button" onClick={this.changeColor}>Change color</button>
            </div>
        );
    }
}

ReactDOM.render(<Car model="Mustang" />, document.getElementById("root"));