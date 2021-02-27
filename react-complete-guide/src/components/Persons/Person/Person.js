import React,{Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.module.css';
import Auxi from '../../../hoc/Auxi';
import withClass from '../../../hoc/withClass.js';

class Person extends Component{
    render(){
        return (
            <Auxi>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Auxi>
        );
    }
    
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);