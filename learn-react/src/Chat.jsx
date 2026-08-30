export default function Chat({ message, handleMessageChange, to }) {
  return (
    <div className="chat">
      <textarea
        onChange={handleMessageChange}
        value={message}
        placeholder={"Chat to " + to.name}
      ></textarea>
      <button>Send to {to.email}</button>
    </div>
  );
}
