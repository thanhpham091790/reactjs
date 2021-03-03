import React, {useEffect,useRef} from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {

    const toggleBtnRef = useRef(null);

    useEffect(()=>{
      console.log('[Cockpit.js] useEffect');
      // Http Request ...or set State here!
      // const timer = setTimeout(()=>{
      //   alert('Save something on cloud');
      // }, 1000);

      toggleBtnRef.current.click();

      return(()=>{
        console.log('[Cockpit.js] cleanup work in useEffect');
      });
    },[]);

    useEffect(()=>{
      console.log('[Cockpit.js] 2nd useEffect');
      
      return(()=>{
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');
      });
    });

    let btnClass = '';
    let assignClasses = [];

    if(props.showPersons){
        btnClass = classes.Red;
    }
    if (props.personsLength <= 2) {
      assignClasses.push(classes.Red);
    }
    if (props.personsLength <= 1) {
      assignClasses.push(classes.Bold);
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignClasses.join(' ')}>This is really working!</p>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
        
    );
}

export default React.memo(cockpit);