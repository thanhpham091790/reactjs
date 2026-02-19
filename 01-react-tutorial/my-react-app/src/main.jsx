
import { createRoot } from 'react-dom/client'

function Car() {

  return (
    <>
      <h2 className='greeting'>Hello world!</h2>
    </>
  );
}

createRoot(document.getElementById('root')).render(<Car />);
