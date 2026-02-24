
import { useState } from "react";

function MyForm() {
    const [name, setName] = useState('');

    function changeHandler(event) {
        setName(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        alert(name);
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Enter your name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={changeHandler}
            />
            <input type="submit" />
        </form>
    );
}

export default MyForm;