import React from 'react';
import ReactDOM from 'react-dom';
import styles from './App.module.css';

class Car extends React.Component{
  render(){
    return <h2 className={styles.bigblue}>Hi, I am a Toyota Car!</h2>
  }
}

export default Car;