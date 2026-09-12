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

  if (page === "view") {
    return (
      <>
        <p>
          First name: <b>Jane</b>
        </p>
        <p>
          Last name: <b>Jacobs</b>
        </p>
        <p>
          <button onClick={handleEditButtonClick}>Edit Profile</button>
        </p>
        <p>
          <i>Hello, Jane Jacobs!</i>
        </p>
      </>
    );
  } else {
    return (
      <>
        <p>
          First name: <input type="text" value={firstName} />
        </p>
        <p>
          Last name: <input type="text" value={lastName} />
        </p>
        <p>
          <button>Save Profile</button>
        </p>
        <p>
          <i>Hello, Jane Jacobs!</i>
        </p>
      </>
    );
  }
}
