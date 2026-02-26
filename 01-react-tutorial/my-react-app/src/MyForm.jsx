
import { useState } from "react";

function MyForm() {

    const [inputs, setInputs] = useState({
        name: 'Toan Pham',
        car: 'Volvo',
        comment: 'I love Toyota.',
        tomato: true,
        onion: false,
        fruit: 'apple'
    });

    const wrapperStyles = {
        margin: '30px'
    }

    function changeHandler(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }));
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <form onSubmit={submitHandler}>
            <fieldset>
                <legend>React Form</legend>
                <div className="wrapper" style={wrapperStyles}>
                    <p>Selection your favorite fruit:</p>
                    <label>
                        <input
                            type='radio'
                            name='fruit'
                            value='apple'
                            checked={inputs.fruit === 'apple'}
                            onChange={changeHandler}
                        /> Apple
                    </label>
                    <label>
                        <input
                            type='radio'
                            name='fruit'
                            value='banana'
                            checked={inputs.fruit === 'banana'}
                            onChange={changeHandler}
                        /> Banana
                    </label>
                    <label>
                        <input
                            type='radio'
                            name='fruit'
                            value='cherry'
                            checked={inputs.fruit === 'cherry'}
                            onChange={changeHandler}
                        /> Cherry
                    </label>
                </div>
                <div className='wrapper' style={wrapperStyles}>
                    <p>Enter your name:</p>
                    <input
                        type="text"
                        name="name"
                        value={inputs.name}
                        onChange={changeHandler}
                    />
                </div>
                <div className='wrapper' style={wrapperStyles}>
                    <p>Choose your car:</p>
                    <select name="car" value={inputs.car} onChange={changeHandler}>
                        <option value="Ford">Ford</option>
                        <option value="Volvo">Volvo</option>
                        <option value="Fiat">Fiat</option>
                    </select>
                </div>
                <div className='wrapper' style={wrapperStyles}>
                    <p>Write some comment here:</p>
                    <textarea
                        name="comment"
                        value={inputs.comment}
                        onChange={changeHandler}
                    />
                </div>
                <div className='wrapper' style={wrapperStyles}>
                    <p>Choose your veggies:</p>
                    <label>
                        <input
                            type="checkbox"
                            name="tomato"
                            checked={inputs.tomato}
                            onChange={changeHandler}
                        />Tomato
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="onion"
                            checked={inputs.onion}
                            onChange={changeHandler}
                        />Onion
                    </label>
                </div>
                <div className='wrapper' style={wrapperStyles}>
                    <input type="submit" />
                </div>
            </fieldset>
        </form>
    );
}

export default MyForm;