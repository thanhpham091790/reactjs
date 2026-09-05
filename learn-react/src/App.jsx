import { useState } from "react";

// The status state can be 'empty', 'typing', 'submitting', 'success', or 'error'

export default function Form({ status = "typing" }) {
  // All variables
  let disabled;

  if (status === "empty") {
    disabled = true;
  }
  if (status === "typing") {
    disabled = false;
  }

  return (
    <>
      <h1>City quiz</h1>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <p>
        <textarea></textarea>
        <br />
        <button disabled={disabled}>Submit</button>
      </p>
    </>
  );
}
