import { useState } from "react";
import ContactList from "./ContactList";
import Chat from "./Chat";

const contacts = [
  { name: "Taylor", email: "taylor@mail.com" },
  { name: "Alice", email: "alice@mail.com" },
  { name: "Bob", email: "bob@mail.com" },
];

export default function Messenger() {
  /**
   * All states
   */
  const [to, setTo] = useState(contacts[0]);

  /**
   * All handlers
   */
  function handleButtonClick(contact) {
    setTo(contact);
  }

  return (
    <>
      <ContactList
        contacts={contacts}
        handleButtonClick={handleButtonClick}
      ></ContactList>
      <Chat key={to.email} to={to}></Chat>
    </>
  );
}
