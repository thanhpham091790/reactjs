import { useState } from "react";

export default function FeedbackForm({ status = "typing" }) {
  /**
   * States
   */
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
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
