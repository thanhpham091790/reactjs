import React,{Component} from "react"
import classes from './Person.module.css';
import Auxi from '../../../hoc/Auxi';
import WithClass from '../../../hoc/WithClass';

class Person extends Component{
    render(){
        return (
            <WithClass classes={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </WithClass>
        );
    }
    
}

export default Person;