
import { Suspense, lazy } from "react";
const Fruits = lazy(() => import('./Fruits'));

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