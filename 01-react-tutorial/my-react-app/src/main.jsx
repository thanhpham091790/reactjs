
import { createRoot } from 'react-dom/client'

function Car() {
  const brand = 'Toyota';
  const model = 'Camry';

  return (
    <>
      <h2>My car is {brand} {model}.</h2>
    </>
  );
}

createRoot(document.getElementById('root')).render(<Car />);
