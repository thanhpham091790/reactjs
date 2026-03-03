import { useRef, useState, useEffect } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const previousInputValue = useRef('');

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  function changeHandler(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <input type='text' value={inputValue} onChange={changeHandler} />
      <h2>Current value: {inputValue}</h2>
      <h2>Previous value: {previousInputValue.current}</h2>
    </>
  );
}

export default App;