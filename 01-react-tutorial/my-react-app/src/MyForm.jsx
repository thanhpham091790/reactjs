
import { useState } from "react";

function MyForm() {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    function changeNameHandler(event) {
        setName(event.target.value);
    }

    function changeCommentHandler(event) {
        setComment(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log(name, comment);
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="name">Enter your name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={changeNameHandler}
                />
            </div>
            <div>
                <label htmlFor="comment">Write here:</label>
                <textarea
                    id="comment"
                    value={comment}
                    onChange={changeCommentHandler}
                />
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    );
}

export default MyForm;