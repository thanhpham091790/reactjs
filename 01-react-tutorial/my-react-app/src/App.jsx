import { useRef, useState, useEffect } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  function changeHandler(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <p>Type in the input field:</p>
      <input
        type='text'
        value={inputValue}
        onChange={changeHandler}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export default App;