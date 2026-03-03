import { useState } from "react";
import { UserContext } from "./UserContext";
import Component1 from "./Component1";

function App() {
  const [user, setUser] = useState('Thanh');
  return (
    <UserContext.Provider value={user}>
      <Component1 />
    </UserContext.Provider>
  );
}

export default App;