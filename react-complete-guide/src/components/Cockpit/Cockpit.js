import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
    console.log('[Cockpit.js] rendering....');
    
    let btnClass = '';
    let assignClasses = [];

    if(props.showPersons){
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
      assignClasses.push(classes.Red);
    }
    if (props.persons.length <= 1) {
      assignClasses.push(classes.Bold);
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
        
    );
}

export default cockpit;