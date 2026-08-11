import { useState } from "react";

const initialCounters = [0, 0, 0];

export default function CounterList() {
  // States
  const [counters, setCounters] = useState(initialCounters);

  // Handlers
  function handleClick(i) {
    setCounters(
      counters.map((counter, index) => {
        if (index === i) {
          return counter + 1;
        } else {
          return counter;
        }
      }),
    );
  }

  return (
    <>
      <ul>
        {counters.map((counter, index) => {
          return (
            <li key={index}>
              {counter} <button onClick={() => handleClick(index)}>+1</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
