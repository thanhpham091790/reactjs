import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    firstName: "Thanh",
    lastName: "Pham",
    email: "thanhpham091790@gmail.com",
  });

  function formChangeHandler(e) {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  }

  return (
    <form>
      <div>
        <label>First name:</label>
        <input
          type="text"
          value={person.firstName}
          name="firstName"
          onChange={formChangeHandler}
        />
      </div>
      <div>
        <label>Last name:</label>
        <input
          type="text"
          value={person.lastName}
          name="lastName"
          onChange={formChangeHandler}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={person.email}
          name="email"
          onChange={formChangeHandler}
        />
      </div>
      <div>
        {person.firstName} {person.lastName} ({person.email})
      </div>
    </form>
  );
}
