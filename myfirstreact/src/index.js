import React from 'react';
import ReactDOM from 'react-dom';

class Football extends React.Component{
    constructor(props){
        super(props);
    }
    shoot = (a) => {
        alert(a);
    }
    render(){
        return(
            <button onClick={() => this.shoot("A great shot!")}>Take the shot!</button>
        );
    }
}

ReactDOM.render(<Football />, document.getElementById("root"));