import React from 'react';
import ReactDOM from 'react-dom';

const myelement = <h1>I love Jsx!</h1>;
const myelement1 = React.createElement("h1",{},"I do not use jxs!");
ReactDOM.render(myelement1,document.getElementById("root"));