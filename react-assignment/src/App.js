import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component{
  state = {
    username: "thanhthuy9390"
  };
  
  stateHandler = (event) => {
    this.setState({
      username: "thanhthuy30"
    });
  }

  render(){  
    return (
      <div className="App">
        <UserOutput username={this.state.username} />
        <UserInput changed={this.stateHandler} />
      </div>
    );
  }
}

export default App;
