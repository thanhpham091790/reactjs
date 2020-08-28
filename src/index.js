import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }

    changeColor = () =>{
        this.setState({
            favoritecolor:"blue"
        });
    }

    static getDerivedStateFromProps(props, state){
        return({favoritecolor:props.favcolor});
    }

    render() {
        return (
            <div>
                <h1>My favorite color is {this.state.favoritecolor}.</h1>
                <button type="button" onClick={this.changeColor}>Change color</button>
            </div>
        );
    }
}

ReactDOM.render(<Header favcolor="yellow" />, document.getElementById("root"));