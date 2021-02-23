import React from "react"
import classess from './Person.module.css';

const person = (props) => {
    return (
        <div className={classess.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
}

export default person;