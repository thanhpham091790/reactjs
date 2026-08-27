import { useState } from "react";

export default function Form() {
  /**
   * All states
   */
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("typing");

  /**
   * All handlers
   */

  // Handler when change answer
  function handleAnswerChange(event) {
    setAnswer(event.target.value);
  }

  return (
    <>
      <h1>City quiz</h1>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <p>
        <textarea value={answer} onChange={handleAnswerChange}></textarea>
      </p>
      <button disabled={status == "typing" ? true : false}>Submit</button>
    </>
  );
}
