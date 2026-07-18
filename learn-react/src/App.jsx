import { sculptureList } from "./data.js";
import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  function handleShow() {
    setShow((prevShow) => !prevShow);
  }

  function handleNext() {
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  return (
    <>
      <button onClick={handleNext}>Next</button>
      <h2>
        <i>{sculptureList[index].name}</i> by {sculptureList[index].artist}
      </h2>
      <p>
        ({index + 1} of {sculptureList.length})
      </p>
      <button onClick={handleShow}>{show ? "Hide" : "Show"} details</button>
      {show && <p>{sculptureList[index].description}</p>}
      <p>
        <img src={sculptureList[index].url} alt={sculptureList[index].alt} />
      </p>
    </>
  );
}
