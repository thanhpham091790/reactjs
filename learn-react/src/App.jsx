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

  return (
    <>
      <h1>What's your travel snack?</h1>
      <p>
        <ul>
          <li>
            pretzels <button>Choose</button>
          </li>
          <li>
            crispy seaweed <button>Choose</button>
          </li>
          <li>
            granola bar <button>Choose</button>
          </li>
        </ul>
      </p>
      <p>You picked pretzels.</p>
    </>
  );
}
