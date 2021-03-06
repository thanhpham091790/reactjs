import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            age: null,
            errormessage: "",
            description: "The content of a textarea goes in the value attribute",
            mycar: "Volvo"
        }
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submiting " + this.state.username);
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = "";
        if (nam === "age") {
            if (!Number(val) && val != "") {
                err = <strong>Your age must be a number</strong>
            }
        }
        this.setState({
            [nam]: val,
            errormessage: err
        });
    }
    render() {
        let header = "";
        if (this.state.username || this.state.age) {
            header = <h1>Hello {this.state.username} {this.state.age}</h1>;
        } else {
            header = "";
        }
        return (
            <form onSubmit={this.mySubmitHandler}>
                {header}
                <p>Enter your name:</p>
                <input type="text" name="username" onChange={this.myChangeHandler} />
                <p>Enter your age:</p>
                <input type="text" name="age" onChange={this.myChangeHandler} /><br />
                {this.state.errormessage}
                <p>Enter your description:</p>
                <textarea value={this.state.description} />
                <p>Select your car:</p>
                <select value={this.state.mycar}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select><br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(<MyForm />, document.getElementById("root"));