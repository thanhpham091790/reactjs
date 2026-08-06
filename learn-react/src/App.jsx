import { useState } from "react";

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending((prevPending) => prevPending + 1);
    await delay(3000);
    setPending((prevPending) => prevPending - 1);
    setCompleted((prevCompleted) => prevCompleted + 1);
  }

  function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  return (
    <>
      <p>
        <b>Pending: {pending}</b>
      </p>
      <p>
        <b>Completed: {completed}</b>
      </p>
      <p>
        <button onClick={handleClick}>Buy</button>
      </p>
    </>
  );
}
