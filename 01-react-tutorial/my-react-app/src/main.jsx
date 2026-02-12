
import { createRoot } from 'react-dom/client'

const fruitlist = ['apple', 'banana', 'cherry'];

function FruitList() {
  return (
    <ul>
      {
        fruitlist.map((fruit, index, array) => {
          return (
            <li key={index}>
              Name: {fruit}, Index: {index}, Array: {array}
            </li>
          );
        })
      }
    </ul>
  );
}

createRoot(document.getElementById('thanh')).render(<FruitList />);
