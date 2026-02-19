
import { createRoot } from 'react-dom/client'

function Car(props) {

  const className = 'greeting';
  const x = 4;
  const style1 = {
    color: 'red',
    fontSize: '20px'
  };
  const style2 = {
    color: props.color,
    fontSize: '40px'
  }


  function onClickHandler() {
    alert('Hello, Thanh Pham!');
  }

  return (
    <>
      <h2 className={className} onClick={onClickHandler} style={x > 5 ? style1 : style2}>Hello world!</h2>
    </>
  );
}

function Garage() {
  return (
    <>
      <h1>Who live in garage ?</h1>
      <Car color='Salmon' />
    </>
  );
}

createRoot(document.getElementById('root')).render(<Garage ></Garage>);
