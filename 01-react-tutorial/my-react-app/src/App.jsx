
import { useState } from "react";

function App() {
  const [car, setCar] = useState({
    brand: 'Toyota',
    model: 'Camry',
    year: '2017',
    color: 'Silver'
  });

  function changeColor(newColor) {
    setCar(prevCar => ({ ...prevCar, color: newColor }));
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>It is a {car.color} {car.model} from {car.year}.</p>
      <button type="button" onClick={() => changeColor('Blue')}>Blue</button>
    </>
  );
}

export default App;