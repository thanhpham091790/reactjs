import { useState } from "react";

export default function Checkin() {
  /**
   * States
   */
  const [name, setName] = useState({
    first: "Thanh",
    last: "Pham",
  });

  /**
   * Handlers
   */
  function handleNameChange(e) {
    const { name, value } = e.target;
    setName((prevName) => ({
      ...prevName,
      [name]: value,
    }));
  }

  return (
    <>
      <h2>Let's check you in</h2>
      <div>
        <p>
          <label>First name: </label>
          <input
            type="text"
            value={name.first}
            name="first"
            onChange={handleNameChange}
          />
        </p>
        <p>
          <label>Last name: </label>
          <input
            type="text"
            value={name.last}
            name="last"
            onChange={handleNameChange}
          />
        </p>
      </div>
      <p>
        Your ticket will be issued to:{" "}
        <b>
          {name.first} {name.last}
        </b>
      </p>
    </>
  );
}
