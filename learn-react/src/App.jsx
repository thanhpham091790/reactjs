import { useState } from "react";

const initialList = [
  { id: 0, title: "Big Bellies" },
  { id: 1, title: "Lunar Landscape" },
  { id: 2, title: "Terracotta Army" },
];

export default function List() {
  // States
  const [list, setList] = useState(initialList);

  // Handlers
  function handleClick() {
    const reverseList = [...list];
    reverseList.reverse();
    setList(reverseList);
  }
  return (
    <>
      <button onClick={handleClick}>Reverse</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}
