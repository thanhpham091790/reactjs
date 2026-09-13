import { useState } from "react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

export default function Menu() {
  /**
   * All states
   */
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  /**
   * All handlers
   */
  function handleInputChange(id) {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, title: event.target.value };
      } else {
        return item;
      }
    });

    setItems(updatedItems);
  }

  function handleChooseButtonClick(id) {
    setSelectedId(id);
  }

  /**
   * All variables
   */
  const selectedItem = items.filter((item) => item.id === selectedId)[0];

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="text"
              value={item.title}
              onChange={() => handleInputChange(item.id)}
            />{" "}
            <button onClick={() => handleChooseButtonClick(item.id)}>
              Choose
            </button>
          </li>
        ))}
      </ul>
      <p>
        You picked <b>{selectedItem.title}</b>
      </p>
    </>
  );
}
