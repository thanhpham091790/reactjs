import React, {Component} from 'react';

class UserInput extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="UserInput">
                <input type="text" onChange={this.props.changed} />
            </div>
        );
    }
}

export default UserInput;