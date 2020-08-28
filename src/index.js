import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {favoritecolor:"silver"}
    }
    
    render(){
        return(
        <h1>My favorite color is {this.state.favoritecolor}.</h1>
        );
    }
}

ReactDOM.render(<Header />, document.getElementById("root"));