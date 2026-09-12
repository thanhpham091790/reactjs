import { useState } from "react";

export default function MovingDot() {
  /**
   * All states
   */
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "calc(100vw - 18px)",
          height: "calc(100vh - 18px)",
          border: "1px solid lightgrey",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "green",
            borderRadius: "50%",
            left: -8,
            top: -8,
            width: 16,
            height: 16,
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        />
      </div>
    </>
  );
}
