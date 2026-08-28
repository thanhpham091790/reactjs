
export default function Panel({ children }) {
  return (
    <>
      <div
        style={{
          border: "1px solid grey",
        }}
      >
        {children}
      </div>
    </>
  );
}
