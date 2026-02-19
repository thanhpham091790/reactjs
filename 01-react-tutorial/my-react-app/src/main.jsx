
import { createRoot } from 'react-dom/client'

function Car() {

  const className = 'greeting';

  return (
    <>
      <h2 className={className}>Hello world!</h2>
    </>
  );
}

createRoot(document.getElementById('root')).render(<Car />);
