import { useState } from "react";

export default function Form() {
  /**
   * All states
   */
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <>
      <h3>Let's check you in</h3>
      <div>
        <p>
          First name:{" "}
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </p>
        <p>
          Last name:{" "}
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </p>
      </div>
      <p>
        Your ticket will be issued to: {firstName} {lastName}
      </p>
    </>
  );
}
