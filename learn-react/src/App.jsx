function Button({ onSmash, children }) {
  return <button onClick={onSmash}>{children}</button>;
}

export default function App() {
  return (
    <>
      <Button onSmash={() => alert("Playing!")}>Play Movie</Button>{" "}
      <Button onSmash={() => alert("Uploading!")}>Upload Image</Button>
    </>
  );
}
