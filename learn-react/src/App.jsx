import { useState } from "react";
export default function EditProfile() {
  /**
   * All states
   */
  const [page, setPage] = useState("view"); // 'view' or 'edit'
  const [firstName, setFirstName] = useState("Jane");
  const [lastName, setLastName] = useState("Jacobs");

  /**
   * All handlers
   */

  function handleEditButtonClick() {
    setPage("edit");
  }

  function handleSaveButtonClick() {
    setPage("view");
  }

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  if (page === "view") {
    return (
      <>
        <p>
          First name: <b>{firstName}</b>
        </p>
        <p>
          Last name: <b>{lastName}</b>
        </p>
        <p>
          <button onClick={handleEditButtonClick}>Edit Profile</button>
        </p>
        <p>
          <i>
            Hello, {firstName} {lastName}!
          </i>
        </p>
      </>
    );
  } else {
    return (
      <>
        <p>
          First name:{" "}
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </p>
        <p>
          Last name:{" "}
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </p>
        <p>
          <button onClick={handleSaveButtonClick}>Save Profile</button>
        </p>
        <p>
          <i>
            Hello, {firstName} {lastName}!
          </i>
        </p>
      </>
    );
  }
}
