import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);
  function numberChangeHandler() {
    setNumber(number + 5);
    setTimeout(() => {
      alert(number);
    }, 3000);
  }
  return (
    <>
      <h1>{number}</h1>
      <button onClick={numberChangeHandler}>+5</button>
    </>
  );
}
