export default function App() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Submitting!");
      }}
    >
      <input type="text" /> <button>Send</button>
    </form>
  );
}
