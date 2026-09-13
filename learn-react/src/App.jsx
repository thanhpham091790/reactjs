import { useState } from "react";

export default function FeedbackForm() {
  /**
   * All states
   */
  const [text, setText] = useState("");
  const [status, setStatus] = useState("typing"); // "typing", "sending", "sent"

  if (status === "sent") return <h1>Thanks for feedback!</h1>;

  return (
    <>
      <p>How was your stay at The Prancing Pony?</p>
      <p>
        <textarea disabled={status === "sending"} />
        <br />
        <button disabled={status === "sending"}>Send</button>
      </p>
      <p style={{ display: status === "sending" ? "block" : "none" }}>
        Sending...
      </p>
    </>
  );
}
