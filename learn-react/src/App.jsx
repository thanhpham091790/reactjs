export default function App() {
  return (
    <>
      <AlertButton message="Playing!">Play Movie</AlertButton>{" "}
      <AlertButton message="Uploading!">Upload Image</AlertButton>
    </>
  );
}

function AlertButton({ message, children }) {
  function handleClick(mes) {
    alert(mes);
  }

  return <button onClick={() => handleClick(message)}>{children}</button>;
}
