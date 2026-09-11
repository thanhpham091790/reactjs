import { useState } from "react";

// The status state can be 'empty', 'typing', 'submitting', 'success', or 'error'

export default function Form() {
  /**
   *  All states
   */
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);

  // The status state can be 'typing', submitting, or 'success'
  const [status, setStatus] = useState("typing");

  /**
   *  All handlers
   */
  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  async function handleSubmitButtonClick(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }

  function submitForm() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLocaleLowerCase() !== "lima";
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
      {status === "success" ? (
        <h1>Thank you</h1>
      ) : (
        <>
          <h1>City quiz</h1>
          <p>
            In which city is there a billboard that turns air into drinkable
            water?
          </p>
          <p>
            <textarea
              disabled={status === "submitting"}
              onChange={handleTextareaChange}
            ></textarea>
            <br />
            <button
              disabled={answer === "" || status !== "typing"}
              onClick={handleSubmitButtonClick}
            >
              Submit
            </button>
            <br />
            <img
              style={{ display: status === "submitting" ? "block" : "none" }}
              src="https://loading.io/assets/mod/spinner/spinner/sample.gif"
              width="100px"
              height="100px"
            />
          </p>
          <h2
            style={{ color: "red", display: error === null ? "none" : "block" }}
          >
            {error !== null && error.message}
          </h2>
        </>
      )}
    </>
  );
}
