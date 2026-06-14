import { useState } from "react";

export default function Form() {
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("Hello");

  function submitHandler(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="person">To: </label>
        <select value={to} id="person" onChange={(e) => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </div>

      <div>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Message"
        />
      </div>
      <div>
        <input type="submit" value="Send" />
      </div>
    </form>
  );
}
