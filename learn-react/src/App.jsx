import { useState } from "react";

export default function Form() {
  // States
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });

  // Handlers
  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value,
    });
  }

  return (
    <form>
      <label>First name: </label>{" "}
      <input
        type="text"
        placeholder="First name"
        value={person.firstName}
        onChange={handleFirstNameChange}
      />
      <br />
      <label>Last name: </label>{" "}
      <input
        type="text"
        placeholder="Last name"
        value={person.lastName}
        onChange={handleLastNameChange}
      />
      <br />
      <label>Email: </label>{" "}
      <input
        type="email"
        placeholder="Email"
        value={person.email}
        onChange={handleEmailChange}
      />
      <br />
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </form>
  );
}
