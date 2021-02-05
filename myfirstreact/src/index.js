import React from 'react';
import ReactDOM from 'react-dom';

const myelement = <h1>I love Jsx!</h1>;
const myelement1 = React.createElement("h1",{},"I do not use jxs!");
const myelement2 = <h1>React is {5+5} times better with JSX!</h1>
const myelement3 = (
    <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
    </ul>
);
const myelement4 = (
    <div>
        <h1>I am a Header</h1>
        <h1>I am a Header too.</h1>
    </div>
);
ReactDOM.render(myelement4,document.getElementById("root"));