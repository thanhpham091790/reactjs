
import { createRoot } from 'react-dom/client'

function Car() {

  const className = 'greeting';
  const x = 6;
  let style;

  if (x > 5) {
    style = {
      color: 'red',
      fontSize: '20px'
    };
  } else {
    style = {
      color: 'blue',
      fontSize: '40px'
    }
  }


  function onClickHandler() {
    alert('Hello, Thanh Pham!');
  }

  return (
    <>
      <h2 className={className} onClick={onClickHandler} style={style}>Hello world!</h2>
    </>
  );
}

createRoot(document.getElementById('root')).render(<Car />);
