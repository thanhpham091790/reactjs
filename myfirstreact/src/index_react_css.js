import React from 'react';
import ReactDOM from 'react-dom';
import Car from "./App.js"

class MyHeader extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello Style!</h1>
                <p>Add a little style.</p>
                <Car />
            </div>
        );
    }
}

ReactDOM.render(<MyHeader />, document.getElementById("root"));