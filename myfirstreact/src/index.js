import React from 'react';
import ReactDOM from 'react-dom';

const myelement = <h1>I love Jsx!</h1>;
const myelement1 = React.createElement("h1",{},"I do not use jxs!");
const myelement2 = <h1>React is {5+5} times better with JSX!</h1>
ReactDOM.render(myelement2,document.getElementById("root"));