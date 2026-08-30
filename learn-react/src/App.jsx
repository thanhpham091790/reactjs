import { useState } from "react";

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
      <div className="contact-list">
        {contacts.map((contact, index) => {
          return (
            <button onClick={() => handleButtonClick(index)} key={index}>
              {contact.name}
            </button>
          );
        })}
      </div>
      <div className="chat">
        <textarea
          onChange={handleMessageChange}
          value={message}
          placeholder={"Chat to " + to.name}
        ></textarea>
        <button>Send to {to.email}</button>
      </div>
    </>
  );
}
