import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({favoritecolor:"yellow"})
        },3000);
    }

    getSnapshotBeforeUpdate(prevprops, prestate){
        document.getElementById("div1").innerHTML = "Before updated favorite color is " + prestate.favoritecolor;
    }

    componentDidUpdate(){
        document.getElementById("div2").innerHTML = "After updated favorite color is " + this.state.favoritecolor;
    }
   
    render() {
        return (
            <div>
                <h1>My favorite color is {this.state.favoritecolor}.</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        );
    }
}

ReactDOM.render(<Header />, document.getElementById("root"));