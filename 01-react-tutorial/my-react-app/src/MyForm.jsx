
import { useState } from "react";

function MyForm() {

    const [inputs, setInputs] = useState({});

    function changeHandler(event) {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }));
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="name">Enter your name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={inputs.name}
                    onChange={changeHandler}
                />
            </div>
            <div>
                <label htmlFor="car">Choose your car:</label>
                <select id="car" name="car" value={inputs.car} onChange={changeHandler}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select>
            </div>
            <div>
                <label htmlFor="comment">Write here:</label>
                <textarea
                    id="comment"
                    name="comment"
                    value={inputs.comment}
                    onChange={changeHandler}
                />
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    );
}

export default MyForm;