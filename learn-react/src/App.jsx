import { useState } from "react";

export default function FeedbackForm() {
  /**
   * States
   */
  const [text, setText] = useState("");
  const [status, setStatus] = useState("typing"); // 'typing', 'submitting', 'sent'

  return (
    <>
      <h1>Thanks for feedback!</h1>
      <p>How was your stay at The Prancing Pony?</p>
      <p>
        <textarea></textarea>
        <br />
        <button>Send</button>
      </p>
      <p>Sending...</p>
    </>
  );
}
