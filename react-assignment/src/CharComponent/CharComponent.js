import React, {Component} from 'react';
import './CharComponent.css';

class CharComponent extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="CharComponent" onClick={this.props.clicked}>
                {this.props.char}
            </div>
        );
    }
}

export default CharComponent;