import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  function buttonClickHandler() {
    setNumber((preNum) => preNum + 1);
    setNumber((preNum) => preNum + 1);
    setNumber((preNum) => preNum + 1);
  }

  return (
    <>
      <h1>{number}</h1>
      <button onClick={buttonClickHandler}>+3</button>
    </>
  );
}
