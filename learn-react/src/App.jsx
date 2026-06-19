import { useState } from "react";

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  function pointerMoveHander(e) {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        border: "1px solid grey",
        borderRadius: "10px",
        margin: "0 auto",
      }}
      onPointerMove={pointerMoveHander}
    >
      <div
        style={{
          position: "absolute",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: "red",
          left: "-10px",
          top: "-10px",
          transform: `translate(${position.x}px,${position.y}px)`,
        }}
      ></div>
    </div>
  );
}
