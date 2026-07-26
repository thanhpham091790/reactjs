import { useState } from "react";

export default function Form() {
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("Hi, how are you ?");

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`Hello, ${to}`);
    }, 4000);
  }
  function handleChangeMessage(e) {
    setMessage(e.target.value);
  }
  function handleChangeTo(e) {
    setTo(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>To:</label>{" "}
        <select value={to} onChange={handleChangeTo}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </p>
      <p>
        <textarea
          placeholder="Message"
          value={message}
          onChange={handleChangeMessage}
        />
      </p>
      <p>
        <button>Send</button>
      </p>
    </form>
  );
}
