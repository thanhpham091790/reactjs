import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            favoritecolor: "red"
        };
    }
    static getDerivedStateFromProps(props, state){
        return {
            favoritecolor: props.favcol
        };
    }
    changeColor = () => {
        this.setState({
            favoritecolor: "blue"
        });
    }
    render(){
        return(
            <div>
                <h1>My favorite color is {this.state.favoritecolor}</h1>
                <button type="button" onClick={this.changeColor}>Change Color</button>
            </div>
        );
    }
   
}

const myHeader = <Header favcol="yellow" />;
ReactDOM.render(myHeader,document.getElementById("root"));