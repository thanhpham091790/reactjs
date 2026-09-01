import { useContext } from "react";
import { LevelContext } from "./LevelContext";

export default function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <div
      style={{
        border: "1px solid grey",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px",
      }}
    >
      <LevelContext value={level + 1}>{children}</LevelContext>
    </div>
  );
}
