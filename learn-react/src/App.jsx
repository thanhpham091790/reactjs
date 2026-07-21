function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ name }) {
  function handleClick() {
    alert(`Playing ${name}`);
  }
  return <Button onClick={handleClick}>{`Playing "${name}"`}</Button>;
}

function UploadButton() {
  return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>;
}

export default function App() {
  return (
    <>
      <PlayButton name="Kiki's Delivery Service" />
      <UploadButton />
    </>
  );
}
