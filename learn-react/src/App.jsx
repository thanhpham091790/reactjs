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
  const [message, setMessage] = useState("");

  /**
   * All handlers
   */
  function handleButtonClick(index) {
    setTo(contacts[index]);
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  return (
    <>
      <ContactList
        contacts={contacts}
        handleButtonClick={handleButtonClick}
      ></ContactList>
      <Chat
        message={message}
        to={to}
        handleMessageChange={handleMessageChange}
      ></Chat>
    </>
  );
}
