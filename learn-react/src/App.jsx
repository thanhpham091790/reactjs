import { useState } from "react";

let nextId = 3;
const initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

export default function List() {
  // States
  const [artists, setArtists] = useState(initialArtists);
  const [name, setName] = useState("");

  // Handlers
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleNameInsert() {
    const insertAt = 1;
    const nextArtists = [
      ...artists.slice(0, insertAt),
      { id: nextId++, name: name },
      ...artists.slice(insertAt),
    ];
    setArtists(nextArtists);
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <div>
        <input type="text" value={name} onChange={handleNameChange} />{" "}
        <button onClick={handleNameInsert}>Insert</button>
      </div>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
