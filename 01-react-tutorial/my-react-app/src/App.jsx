
import { useState, useEffect } from "react";

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  });

  return (
    <>
      <h1>I've rendered {count} times!</h1>
    </>
  );
}

export default App;