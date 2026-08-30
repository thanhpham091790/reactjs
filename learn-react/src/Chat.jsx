import { useState } from "react";

export default function Chat({ to }) {
  /**
   * All states
   */
  const [message, setMessage] = useState("");

  /**
   * All handlers
   */

  function handleMessageChange(e) {
    setMessage(e.target.value);
  }
  return (
    <div className="chat">
      <textarea
        onChange={handleMessageChange}
        value={message}
        placeholder={"Chat to " + to.name}
      ></textarea>
      <button>Send to {to.email}</button>
    </div>
  );
}
