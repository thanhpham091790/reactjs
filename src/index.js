import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }

    render() {
        return (
            <h1>My favorite color is {this.state.favoritecolor}.</h1>
        );
    }
    
    componentDidMount(){
        setTimeout(() => {
            this.setState({ favoritecolor: "silver" })
        }, 3000);
    }
}

ReactDOM.render(<Header />, document.getElementById("root"));