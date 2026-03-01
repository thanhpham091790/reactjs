
import Greeting from "./Greeting";
import WithBorder from "./WithBorder";
import './Greeting.scss';

function App() {
  const GreetingWithBorder = WithBorder(Greeting);

  return (
    <div>
      <Greeting name='Toan' />
      <GreetingWithBorder name='Thanh' />
      <h1>My Header 1</h1>
      <h2>My Header 2</h2>
      <h3>My Header 3</h3>
    </div>
  );
}

export default App;