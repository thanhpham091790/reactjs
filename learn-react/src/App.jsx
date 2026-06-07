import { sculptureList } from "./data.js";
import { useState } from "react";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  let styles = show ? { display: "block" } : { display: "none" };

  function clickNextHandler() {
    let hasNext = false;
    if (index < sculptureList.length - 1) {
      hasNext = true;
    }
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function clickShowHandler() {
    setShow(!show);
  }

  return (
    <>
      <button onClick={clickNextHandler}>Next</button>
      <h1>
        <i>{sculptureList[index].name}</i> by {sculptureList[index].artist}
      </h1>
      <p>
        ({index + 1} of {sculptureList.length})
      </p>
      <button onClick={clickShowHandler}>
        {show ? "Hide" : "Show"} details
      </button>
      <p style={styles}>{sculptureList[index].description}</p>
      <br />
      <img src={sculptureList[index].url} alt={sculptureList[index].alt} />
    </>
  );
}
