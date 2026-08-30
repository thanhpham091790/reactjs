export default function ContactList({ contacts, handleButtonClick}) {
  return (
    <div className="contact-list">
      {contacts.map((contact, index) => {
        return (
          <button onClick={() => handleButtonClick(index)} key={index}>
            {contact.name}
          </button>
        );
      })}
    </div>
  );
}
