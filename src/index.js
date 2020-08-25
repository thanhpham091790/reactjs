import React from 'react';
import ReactDOM from 'react-dom';

const myelement = (
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <th>John</th>
        </tr>
        <tr>
            <td>Pham</td>
        </tr>
    </table>
);
ReactDOM.render(myelement, document.getElementById("root"));