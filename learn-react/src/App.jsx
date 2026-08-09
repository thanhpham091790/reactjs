import { useState } from "react";

let nextId = 0;

export default function List() {
  // States
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  // Handlers
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleButtonClick(e) {
    setArtists([...artists, { id: nextId++, name: name }]);
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input type="text" name="name" onChange={handleNameChange} />{" "}
      <button onClick={handleButtonClick}>Add</button>
      <div>
        <ul>
          {artists.map((artist) => {
            return <li key={artist.id}>{artist.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
