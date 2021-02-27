import React,{Component} from "react"
import classess from './Person.module.css';

class Person extends Component{
    render(){
        return [
            <p key="i1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>,
            <input key="i2" type="text" onChange={this.props.changed} value={this.props.name} />
        ];
    }
    
}

export default Person;