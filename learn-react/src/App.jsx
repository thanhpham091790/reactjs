import { use, useState } from "react";

export default function Form() {
  /**
   * All states
   */
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("empty"); // typing, submitting, success

  /**
   * All handlers
   */
  function handleAnswerChange(e) {
    setAnswer(e.target.value);
  }

  if (status === "success") {
    return <h1>Thank you!</h1>;
  }

  return (
    <form>
      <h1>City quiz</h1>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <p>
        <textarea
          disabled={status === "submitting"}
          onChange={handleAnswerChange}
          value={answer}
        ></textarea>
        <br />
        <button disabled={answer === "" || status === "submitting"}>
          Submit
        </button>
      </p>
      {status === "submitting" && <p>Loading...</p>}
      {status === "error" && (
        <h3 style={{ color: "red" }}>
          Good guess but a wrong answer. Try again!
        </h3>
      )}
    </form>
  );
}
