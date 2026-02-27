
import Fruits from "./Fruits";
import { Suspense } from "react";

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Fruits />
      </Suspense>
    </div>
  );
}

export default App;