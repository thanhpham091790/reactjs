import { useState } from "react";

// The status state can be 'empty', 'typing', 'submitting', 'success', or 'error'

export default function Form() {
  // All states
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);

  // The status state can be 'typing', submitting, or 'success'
  const [status, setStatus] = useState("typing");

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
            <textarea disabled={status === "submitting"}></textarea>
            <br />
            <button disabled={answer === "" || status !== "typing"}>
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
            Nice try but your answer isn't correct !
          </h2>
        </>
      )}
    </>
  );
}
