import { useState } from "react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

export default function Menu() {
  /**
   * States
   */
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(0);

  /**
   * Handlers
   */

  function handleChooseButtonClick(id) {
    setSelectedItem(id);
  }

  /**
   * Variables
   */
  const selectedItemTitle = items.filter((item) => item.id === selectedItem)[0]
    .title;

  return (
    <>
      <h1>What's your travel snack?</h1>
      <div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.title}{" "}
              <button onClick={() => handleChooseButtonClick(item.id)}>
                Choose
              </button>
            </li>
          ))}
        </ul>
      </div>
      <p>You picked {selectedItemTitle}.</p>
    </>
  );
}
