
import { createRoot } from 'react-dom/client'

function Car() {

  const className = 'greeting';

  function onClickHandler() {
    alert('Hello, Thanh Pham!');
  }

  return (
    <>
      <h2 className={className} onClick={onClickHandler}>Hello world!</h2>
    </>
  );
}

createRoot(document.getElementById('root')).render(<Car />);
