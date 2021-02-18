import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component{

  state = {
    length: 0,
    text: ''
  };

  onChangeHandler = (event) => {
    let len = event.target.value.length;
    let txt = event.target.value;
    
    this.setState({length:len, text:txt});
  }

  onClickHander = (event, id) =>{
    let txt = [...this.state.text];
    txt.splice(id,1);
    let newTxt = txt.join("");

    this.setState({text:newTxt});
  }

  render(){  
    let txtArr =  [...this.state.text];

    return (
      <div className="App">
        <input type="text" onChange={this.onChangeHandler} value={this.state.text} />
        <ValidationComponent  length={this.state.length} />
        {txtArr.map((char, index)=>{return <CharComponent char={char} clicked={(event)=>this.onClickHander(event, index)} />})}
      </div>
    );
  }
}

export default App;
