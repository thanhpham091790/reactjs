import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  function buttonClickHandler() {
    setNumber(number + 6);
    setNumber((preNum) => preNum + 1);
    setNumber(1990);
  }

  return (
    <>
      <h1>{number}</h1>
      <button onClick={buttonClickHandler}>Increase the number</button>
    </>
  );
}
