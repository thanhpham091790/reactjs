
import { useState } from "react";

function App() {
  const [color, setColor] = useState('red');

  function changeColor(newColor) {
    setColor(newColor);
  }

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => changeColor('blue')}>Blue</button>
    </>
  );
}

export default App;