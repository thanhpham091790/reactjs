import React from "react";

function Button(props) {
    const { onClick, text } = props;
    console.log(`${text} rendered!`);
    return (
        <button type="button" onClick={onClick}>{text}</button>
    );
}
export default React.memo(Button);