import { useState } from "react";
export default function MovingDot() {
  // States
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Handlers
  function handlePointerMove(e) {
    setPosition({ x: e.clientX - 20, y: e.clientY - 20 });
  }
  return (
    <>
      <div
        onPointerMove={handlePointerMove}
        style={{
          position: "relative",
          width: "calc(100vw - 16px)",
          minHeight: "calc(100vh - 16px)",
          border: "1px solid green",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            backgroundColor: "red",
            position: "absolute",
            left: 0,
            top: 0,
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        ></div>
      </div>
    </>
  );
}
