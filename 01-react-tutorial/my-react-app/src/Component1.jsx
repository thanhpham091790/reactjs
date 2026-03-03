import { useState } from "react";
import Component2 from "./Component2";
function Component1() {
    const [user, setUser] = useState('Thanh');
    return (
        <>
            <h1>Component 1</h1>
            <h2>Hello, {user}!</h2>
            <Component2 user={user} />
        </>
    );
}

export default Component1;