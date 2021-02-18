import React, {Component} from 'react';

class ValidationComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let out = "";
        if(this.props.length<5){
            out = "Text too short.";
        }else if(this.props.length>10){
            out = "Text too long.";
        }else{
            out = "Text good!";
        }
        return(
            <div className="ValidationComponent">
                <p>The length of text is: {this.props.length}</p>
                <p>{out}</p>
            </div>
        );
    }
}

export default ValidationComponent;