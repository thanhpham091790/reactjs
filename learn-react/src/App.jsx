import { useState } from "react";

// The status state can be 'empty', 'typing', 'submitting', 'success', or 'error'

export default function Form({ status = "submitting" }) {
  // All variables
  let isButtonDisabled = true,
    isTextareaDisabled = false,
    isSpinerHidden = true,
    spinerStyles = {};

  if (status === "empty") {
    isButtonDisabled = true;
  }
  if (status === "typing") {
    isButtonDisabled = false;
  }

  if (status === "submitting") {
    isButtonDisabled = true;
    isTextareaDisabled = true;
    isSpinerHidden = false;
  }

  spinerStyles = isSpinerHidden ? { display: "none" } : { display: "block" };

  return (
    <>
      <h1>City quiz</h1>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <p>
        <textarea disabled={isTextareaDisabled}></textarea>
        <br />
        <button disabled={isButtonDisabled}>Submit</button>
        <br />
        <img
          style={spinerStyles}
          src="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif"
          width="30px"
          height="30px"
        />
      </p>
    </>
  );
}
