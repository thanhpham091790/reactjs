import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
            errormessage: ''
        };
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        
        if (nam == 'age') {
            if (!Number(val) && val!='') {
               err = <strong>Your age must be a number</strong>;
            }
        }
        this.setState({
            errormessage: err
        });
        this.setState({
            [nam]: val
        });
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.username);
    }

    render() {
        let header = '';
        if (this.state.username && this.state.age) {
            header = <h1>Hello {this.state.username} {this.state.age}</h1>;
        } else {
            header = '';
        }
        return (
            <form onSubmit={this.mySubmitHandler}>
                {header}
                <p>Enter your name:</p>
                <input type="text" name="username" onChange={this.myChangeHandler} />
                <p>Enter your age:</p>
                <input type="text" name="age" onChange={this.myChangeHandler} />
                {this.state.errormessage}
                <p></p>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(<MyForm />, document.getElementById("root"));