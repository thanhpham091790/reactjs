import { useState } from "react";

export default function Form() {
  /**
   * All states
   */
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  /**
   * All handlers
   */

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  /**
   * All variable
   */

  let fullName;

  /**
   * All logics
   */

  fullName = firstName + " " + lastName;

  return (
    <>
      <h1>Let's check you in</h1>
      <p>
        <label>First name: </label>
        <input
          type="text"
          name="firstname"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </p>
      <p>
        <label>Last name: </label>
        <input
          type="text"
          name="lastname"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </p>
      <p>Your ticket will be issued to: {fullName}</p>
    </>
  );
}
