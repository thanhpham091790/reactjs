
import { createRoot } from 'react-dom/client'

const fruits = ['apple', 'banana', 'cherry'];

function MyList() {
  return (
    <ul>
      {
        fruits.map(fruit =>
          <li key={fruit}>{fruit}</li>
        )
      }
    </ul>
  );
}

createRoot(document.getElementById('thanh')).render(<MyList />);
