import { useRef } from 'react';

function App() {
  const inputElement = useRef();

  function focusInput() {
    inputElement.current.focus();
  }

  return (
    <>
      <input type='text' ref={inputElement} />
      <button type='button' onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default App;