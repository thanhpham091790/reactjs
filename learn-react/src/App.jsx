import { useState } from "react";

const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function App() {
  const [list, setList] = useState(initialList);

  function handleCheckboxChange(id, nextSeen) {
    setList(
      list.map((artwork) => {
        if (artwork.id === id) {
          return { ...artwork, seen: nextSeen };
        } else {
          return artwork;
        }
      }),
    );
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ul>
        {list.map((art) => (
          <li key={art.id}>
            <input
              type="checkbox"
              checked={art.seen}
              onChange={(e) => handleCheckboxChange(art.id, e.target.checked)}
            />{" "}
            {art.title}
          </li>
        ))}
      </ul>
    </>
  );
}
