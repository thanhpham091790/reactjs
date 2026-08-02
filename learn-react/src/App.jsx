import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);
  function handleClick() {
    setNumber(number + 5);
    setNumber((prevNumber) => prevNumber + 1);
  }
  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleClick}>Increase the number</button>
    </>
  );
}
