import { useState } from "react";

// The status state can be 'empty', 'typing', 'submitting', 'success', or 'error'

export default function Form({ status = "error" }) {
  // All variables
  let isButtonDisabled,
    isTextareaDisabled,
    isSpinerHidden,
    isErrorMessageHidden,
    spinerStyles,
    errorMessageStyles;

  if (status === "empty") {
    isButtonDisabled = true;
    isTextareaDisabled = false;
    isSpinerHidden = true;
    isErrorMessageHidden = true;
  }

  if (status === "typing") {
    isButtonDisabled = false;
    isTextareaDisabled = false;
    isSpinerHidden = true;
    isErrorMessageHidden = true;
  }

  if (status === "submitting") {
    isButtonDisabled = true;
    isTextareaDisabled = true;
    isSpinerHidden = false;
    isErrorMessageHidden = true;
  }

  if (status === "error") {
    isButtonDisabled = true;
    isTextareaDisabled = false;
    isSpinerHidden = true;
    isErrorMessageHidden = false;
  }

  spinerStyles = isSpinerHidden ? { display: "none" } : { display: "block" };
  errorMessageStyles = isErrorMessageHidden
    ? { display: "none" }
    : { display: "block" };

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
            <textarea disabled={isTextareaDisabled}></textarea>
            <br />
            <button disabled={isButtonDisabled}>Submit</button>
            <br />
            <img
              style={spinerStyles}
              src="https://loading.io/assets/mod/spinner/spinner/sample.gif"
              width="100px"
              height="100px"
            />
          </p>
          <h2 style={{ ...errorMessageStyles, color: "red" }}>
            Nice try but your answer isn't correct !
          </h2>
        </>
      )}
    </>
  );
}
