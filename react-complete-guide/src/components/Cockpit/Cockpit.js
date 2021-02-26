import React, {useEffect} from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {

    useEffect(()=>{
      console.log('[Cockpit.js] useEffect');
      // Http Request ...or set State here!
      setTimeout(()=>{
        alert('Save something on cloud');
      }, 1000);
    }, []);

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