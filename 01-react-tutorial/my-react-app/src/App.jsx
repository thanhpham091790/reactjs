
import Greeting from "./Greeting";
import WithBorder from "./WithBorder";
import './Greeting.scss';

function App() {
  const GreetingWithBorder = WithBorder(Greeting);

  return (
    <div>
      <Greeting name='Toan' />
      <GreetingWithBorder name='Thanh' />
    </div>
  );
}

export default App;