
import { useState } from "react";

function MyForm() {
    const [name, setName] = useState('');

    function changeHandler(event) {
        setName(event.target.value);
    }

    return (
        <form>
            <label htmlFor="name">Enter your name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={changeHandler}
            />
            <p>Current value: {name}</p>
        </form>
    );
}

export default MyForm;