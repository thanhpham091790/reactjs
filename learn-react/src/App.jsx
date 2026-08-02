import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  function handleClick() {
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          display: "inline-block",
          marginRight: "20px",
        }}
      >
        {number}
      </h1>
      <button onClick={handleClick}>+3</button>
    </div>
  );
}
