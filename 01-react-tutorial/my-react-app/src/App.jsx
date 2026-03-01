import { useRef } from "react";
function App() {
  const inputRef = useRef();

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Type here..." />
      <button type="button" onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default App;