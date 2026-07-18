import { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);

  function handleIncrement() {
    setScore((prevScore) => prevScore + 1);
  }
  return (
    <>
      <div>
        <button onClick={() => handleIncrement()}>+1</button>
        <button
          onClick={() => {
            handleIncrement();
            handleIncrement();
            handleIncrement();
          }}
        >
          +3
        </button>
      </div>
      <div>
        <h2>Score: {score}</h2>
      </div>
    </>
  );
}
