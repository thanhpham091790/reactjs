
import { useState } from 'react';
import { createRoot } from 'react-dom/client'

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

createRoot(document.getElementById('thanh')).render(<Counter />);
