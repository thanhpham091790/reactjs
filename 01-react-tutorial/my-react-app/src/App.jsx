import { useRef } from "react";
import MyInput from "./MyInput";

function App() {
  const inputRef = useRef();

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <MyInput ref={inputRef} placeholder='Type here...' />
      <button type="button" onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default App;