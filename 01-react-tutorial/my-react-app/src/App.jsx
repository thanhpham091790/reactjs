import { useState } from 'react';
import Button from './Button';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  function clickHandler1() {
    setCount1(count1 + 1);
  }

  function clickHandler2() {
    setCount2(count2 + 1);
  }

  console.log('App rendered!');

  return (
    <>
      <h2>Without useCallback:</h2>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <Button onClick={clickHandler1} text='Button 1' />
      <Button onClick={clickHandler2} text='Button 2' />
    </>
  );
}

export default App;