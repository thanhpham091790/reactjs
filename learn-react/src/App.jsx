import { useState } from "react";

export default function FeedbackForm() {
  /**
   * All states
   */
  const [text, setText] = useState("");
  const [status, setStatus] = useState("typing"); // "typing", "sending", "sent"

  /**
   * All handlers
   */

  function handleTextareaChange(e) {
    setText(e.target.value);
  }

  /**
   *
   * All constants
   */
  const isSending = status === "sending";
  const isSent = status === "sent";

  async function handleSendButtonClick(e) {
    e.preventDefault();
    setStatus("sending");
    await sendFeedback(text);
    setStatus("sent");
  }

  if (isSent) return <h1>Thanks for feedback!</h1>;

  return (
    <>
      <p>How was your stay at The Prancing Pony?</p>
      <p>
        <textarea
          disabled={isSending}
          value={text}
          onChange={handleTextareaChange}
        />
        <br />
        <button disabled={isSending} onClick={handleSendButtonClick}>
          Send
        </button>
      </p>
      <p style={{ display: isSending ? "block" : "none" }}>Sending...</p>
    </>
  );
}

function sendFeedback(text) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}
