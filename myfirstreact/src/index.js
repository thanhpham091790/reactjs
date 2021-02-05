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
    render(){
        return(
            <h1>My favorite color is {this.state.favoritecolor}</h1>
        );
    }
}

const myHeader = <Header favcol="yellow" />;
ReactDOM.render(myHeader,document.getElementById("root"));