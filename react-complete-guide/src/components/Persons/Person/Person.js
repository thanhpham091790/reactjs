import React,{Component, Fragment} from "react"
import classess from './Person.module.css';
import Auxi from '../../../hoc/Auxi';

class Person extends Component{
    render(){
        return (
            <Fragment>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Fragment>
        );
    }
    
}

export default Person;