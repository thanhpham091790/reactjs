import React from 'react';
import ReactDOM from 'react-dom';
import styles from './mystyle.module.css';

class Car extends React.Component{
    render(){
        return <h2 className={styles.bigblue}>Hello Car!</h2>
    }
}

export default Car;