import { useState } from "react";

export default function FeedbackForm() {
  /**
   * States
   */
  const [text, setText] = useState("");
  const [status, setStatus] = useState("typing"); // 'typing', 'submitting', 'sent'

  /**
   * Handlers
   */
  function handleTextChange(e) {
    setText(e.target.value);
  }

  async function handleSendButtonClick(e) {
    e.preventDefault();
    setStatus("submitting");
    await sendFeedback(text);
    setStatus("sent");
  }

  function sendFeedback(text) {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  const isSubmitting = status === "submitting";
  const isSent = status === "sent";

  if (isSent) return <h1>Thanks for feedback!</h1>;

  return (
    <form>
      <p>How was your stay at The Prancing Pony?</p>
      <p>
        <textarea
          value={text}
          onChange={handleTextChange}
          disabled={isSubmitting || isSent}
        ></textarea>
        <br />
        <button
          onClick={handleSendButtonClick}
          disabled={isSubmitting || isSent}
        >
          Send
        </button>
      </p>
      {isSubmitting && <p>Sending...</p>}
    </form>
  );
}
