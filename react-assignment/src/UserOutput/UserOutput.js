import React, {Component} from 'react';
import './UserOutput.css'

class UserOutput extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="UserOutput">
                <p>Paragraph 1. Username is {this.props.username}</p>
                <p>Paragraph 2. Username is {this.props.username}</p>
            </div>
        );
    }
}

export default UserOutput;