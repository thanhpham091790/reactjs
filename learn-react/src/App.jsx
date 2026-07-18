import { useState } from "react";

export default function App() {
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("Hello");

  function handleToChange(event) {
    setTo(event.target.value);
  }
  function handleMessageChange(event) {
    setMessage(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}.`);
    }, 5000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        To:
        <select onChange={handleToChange} value={to}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </p>
      <p>
        <textarea value={message} onChange={handleMessageChange} />
      </p>
      <button type="submit">Send</button>
    </form>
  );
}
