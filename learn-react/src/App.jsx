import { useState } from "react";
import "./App.css";

export default function MovingDot() {
  // states
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // handlers
  function handlePointerMove(e) {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  }

  return (
    <div
      onPointerMove={handlePointerMove}
      style={{
        width: "100vw",
        height: "100vh",
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
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
    </div>
  );
}
