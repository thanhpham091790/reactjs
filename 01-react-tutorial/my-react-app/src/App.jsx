
import Greeting from "./Greeting";
import WithBorder from "./assets/WithBorder";
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