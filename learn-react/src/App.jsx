import { useState } from "react";

const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function List() {
  // States
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  // Handlers
  function handleMyListClick(itemId, nextSeen) {
    const myNextList = [...myList];
    const item = myNextList.find((i) => i.id === itemId);
    item.seen = nextSeen;
    setMyList(myNextList);
  }

  function handleYourListClick(itemId, nextSeen) {
    const yourNextList = [...yourList];
    const item = yourNextList.find((i) => i.id === itemId);
    item.seen = nextSeen;
    setYourList(yourNextList);
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList list={myList} onClick={handleMyListClick}></ItemList>
      <h2>Your list of art to see:</h2>
      <ItemList list={yourList} onClick={handleYourListClick}></ItemList>
    </>
  );
}

function ItemList({ list, onClick }) {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <input
            type="checkbox"
            checked={item.seen}
            onChange={(e) => {
              onClick(item.id, e.target.checked);
            }}
          />{" "}
          {item.title}
        </li>
      ))}
    </ul>
  );
}
