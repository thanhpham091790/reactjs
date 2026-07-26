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
    sendMessage();
    setIsSent(true);
  }

  return isSent ? (
    <h1>Your message is on its way</h1>
  ) : (
    <form onSubmit={handleSubmit}>
      <textarea placeholder="Message" value={message} onChange={handleChange} />
      <br />
      <button>Send</button>
    </form>
  );
}
