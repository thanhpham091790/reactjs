import { useState } from "react";
import "./App.css";

export default function MovingDot() {
  // states
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // handlers
  function handlePointerMove(e) {
    position.x = e.clientX;
    position.y = e.clientY;
  }

  return (
    <div
      onPointerMove={handlePointerMove}
      style={{
        width: "calc(100vw - 20px)",
        height: "calc(100vh - 20px)",
        border: "1px solid red",
        margin: "10px",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: "red",
          borderRadius: "50%",
          position: "absolute",
          left: "-10px",
          top: "-10px",
        }}
      ></div>
    </div>
  );
}
