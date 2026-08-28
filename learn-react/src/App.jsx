import { useState } from "react";

export default function Form() {
  /**
   * All states
   */
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("beginning");

  /**
   * All handlers
   */

  // Handler when change answer
  function handleAnswerChange(event) {
    setStatus("typing");
    setAnswer(event.target.value);
  }

  // Handler when submit button is clicked
  function handleSubmitButtonClick(event) {
    event.preventDefault();
    submitForm(answer);
    setStatus("submitting");
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
    console.log(ans);
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
    </>
  );
}
