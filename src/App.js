import React from 'react';
import ReactDOM from 'react-dom';
import styles from './App.module.css';
import './mysass.scss';

class Car extends React.Component {
  render() {
    return (
      <div>
        <h1>Who are you ?</h1>
        <h2 className={styles.bigblue}>Hi, I am a Toyota Car!</h2>
      </div>
    );

  }
}

export default Car;