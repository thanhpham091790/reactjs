import { useState } from "react";
export default function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <>
      <div
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
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "red",
            position: "absolute",
            top: `${position.x}px`,
            left: `${position.y}px`,
            transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
          }}
        ></div>
      </div>
    </>
  );
}
