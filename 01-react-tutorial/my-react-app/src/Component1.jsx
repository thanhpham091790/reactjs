import { useContext } from "react";
import { UserContext } from "./UserContext";
import Component2 from "./Component2";

function Component1() {

    const user = useContext(UserContext);
    return (
        <>
            <h1>Component 1</h1>
            <h2>Hello, {user}!</h2>
            <Component2 />
        </>
    );
}

export default Component1;