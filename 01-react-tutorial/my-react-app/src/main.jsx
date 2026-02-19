
import { createRoot } from 'react-dom/client'

function Car() {
  const brand = 'Toyota';
  const model = 'Camry';

  return (
    <>
      <h2>My car is {brand} {model}. It has {218 * 1.36} horsepower.</h2>
    </>
  );
}

createRoot(document.getElementById('root')).render(<Car />);
