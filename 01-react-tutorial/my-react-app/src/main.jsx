
import { createRoot } from 'react-dom/client'

function Car() {
  const myobj = {
    name: 'Toyota',
    model: 'Camry',
    color: 'Silver'
  }

  function kwtohp(kw) {
    return kw * 1.36;
  }

  return (
    <>
      <h2>My car is {myobj.name} {myobj.model}. It has {kwtohp(218)} horsepower.</h2>
    </>
  );
}

createRoot(document.getElementById('root')).render(<Car />);
