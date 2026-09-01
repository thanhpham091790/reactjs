export default function Section({ children }) {
  return (
    <div
      style={{
        border: "1px solid grey",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px",
      }}
    >
      {children}
    </div>
  );
}
