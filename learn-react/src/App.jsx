import { useState } from "react";

export default function Form() {
  return (
    <>
      <h1>Let's check you in</h1>
      <p>
        <label>First name: </label>
        <input type="text" name="firstname" />
      </p>
      <p>
        <label>Last name: </label>
        <input type="text" name="lastname" />
      </p>
      <p>Your ticket will be issued to:</p>
    </>
  );
}
