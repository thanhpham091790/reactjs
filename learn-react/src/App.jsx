import { useState } from "react";

export default function MovingDot() {
  /**
   * All states
   */
  const [position, setPosition] = useState({ x: 8, y: 8 });

  /**
   * All handlers
   */

  function handlePointerMove(e) {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  }

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "calc(100vw - 18px)",
          height: "calc(100vh - 18px)",
          border: "1px solid lightgrey",
        }}
        onPointerMove={handlePointerMove}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "green",
            width: 16,
            height: 16,
            borderRadius: "50%",

            left: -8,
            top: -8,
            transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
          }}
        />
      </div>
    </>
  );
}
