import { use, useState } from "react";

export default function Form() {
  /**
   * All states
   */
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing"); // typing, submitting, success

  /**
   * All handlers
   */
  function handleAnswerChange(e) {
    setAnswer(e.target.value);
  }

  function checkAnswer(answer) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== "lima";
        if (shouldError) {
          reject(new Error("Good guess but a wrong answer. Try again!"));
        } else {
          resolve();
        }
      }, 1500);
    });
  }

  async function handleSubmitButtonClick(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await checkAnswer(answer);
      setStatus("success");
    } catch (error) {
      setStatus("typing");
      setError(error);
    }
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
        <button
          disabled={answer === "" || status === "submitting"}
          onClick={handleSubmitButtonClick}
        >
          Submit
        </button>
      </p>
      {status === "submitting" && <p>Loading...</p>}
      {error !== null && <h3 style={{ color: "red" }}>{error.message}</h3>}
    </form>
  );
}
