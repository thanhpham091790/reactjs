import { useState } from "react";
export default function Form() {
  const [message, setMessage] = useState("Hi! Write something.");
  const [isSent, setIsSent] = useState(false);

  function messageChangeHandler(e) {
    setMessage(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    setIsSent(true);
  }


  return (
    isSent ? <h1>Thank you for send message.</h1> :
    <form onSubmit={submitHandler}>
      <textarea onChange={messageChangeHandler}>{message}</textarea>
      <br />
      <input type="submit" value="Send" />
    </form>
  );
}
