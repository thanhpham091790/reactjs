import React, {Component} from 'react';

class UserInput extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const style = {
            backgroundColor: 'yellow'
        };
        return(
            <div className="UserInput">
                <input style={style} type="text" value={this.props.username} onChange={this.props.changed} />
            </div>
        );
    }
}

export default UserInput;