import { useState } from "react";

export default function Form() {
  /**
   * All states
   */
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("beginning");
  const [error, setError] = useState(null);

  /**
   * All handlers
   */

  // Handler when change answer
  function handleAnswerChange(event) {
    if (event.target.value != "") {
      setStatus("typing");
    } else {
      setStatus("beginning");
    }
    setAnswer(event.target.value);
  }

  // Handler when submit button is clicked
  async function handleSubmitButtonClick(event) {
    event.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
      setError(null);
    } catch (err) {
      setStatus("typing");
      setError(err.message);
    }
  }

  /**
   * All variables
   */

  let isButtonDisabled, isTextareaDisabled;

  if (status == "typing") {
    isButtonDisabled = false;
  } else {
    isButtonDisabled = true;
  }

  if (status == "submitting") {
    isTextareaDisabled = true;
  } else {
    isTextareaDisabled = false;
  }

  /**
   * All functions
   */
  function submitForm(ans) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = ans.toLocaleLowerCase() !== "lima";
        if (shouldError) {
          reject(new Error("Good guess but a wrong answer. Try again!"));
        } else {
          resolve();
        }
      }, 1500);
    });
  }

  return (
    <>
      <h1>City quiz</h1>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <p>
        <textarea
          value={answer}
          onChange={handleAnswerChange}
          disabled={isTextareaDisabled}
        ></textarea>
      </p>
      <button disabled={isButtonDisabled} onClick={handleSubmitButtonClick}>
        Submit
      </button>

      {status == "success" && <h2>Congratulation! Your answer is right.</h2>}
      {error != null && <h2>{error}</h2>}
    </>
  );
}
