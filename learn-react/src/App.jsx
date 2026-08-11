import { useState } from "react";

let initialShapes = [
  { id: 0, type: "circle", x: 50, y: 100 },
  { id: 1, type: "square", x: 150, y: 100 },
  { id: 2, type: "circle", x: 250, y: 100 },
];

export default function List() {
  // States
  const [shapes, setShapes] = useState(initialShapes);

  // Handlers
  function handleClick() {
    let newShapes = shapes.map((shape) => {
      if (shape.type === "circle") {
        return { ...shape, y: shape.y + 50 };
      } else {
        return shape;
      }
    });
    setShapes(newShapes);
  }

  return (
    <>
      <p>
        <button onClick={handleClick}>Move circles down!</button>
      </p>
      <div>
        {shapes.map((shape) => (
          <div
            key={shape.id}
            style={{
              background: "purple",
              position: "absolute",
              left: shape.x,
              top: shape.y,
              borderRadius: shape.type === "circle" ? "50%" : "",
              width: 20,
              height: 20,
            }}
          ></div>
        ))}
      </div>
    </>
  );
}
