import React from 'react';
import ReactDOM from 'react-dom';

class MyHeader extends React.Component{
    render(){
        let style = {
            color: "blue",
            fontStyle: "italic"
        };
        return(
            <div>
                <h1 style={style}>Hello Style!</h1>
                <p>Add a little style.</p>
            </div>
        );
    }
}

ReactDOM.render(<MyHeader />, document.getElementById("root"));