import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("Hi!");
  const [isSent, setIsSent] = useState(false);

  function handleChange(e) {
    setMessage(e.target.value);
  }

  function sendMessage() {
    console.log("Message is sent!");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSent(true);
    sendMessage();
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea placeholder="Message" value={message} onChange={handleChange} />
      <br />
      <button>Send</button>
    </form>
  );
}
