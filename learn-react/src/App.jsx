import { useState } from "react";

export default function FeedbackForm({ status = "typing" }) {
  if (status === "typing") {
    return (
      <>
        <p>How was your stay at The Prancing Pony?</p>
        <p>
          <textarea />
          <br />
          <button>Send</button>
        </p>
      </>
    );
  }
}
