import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
  /**
   * All states
   */
  const [panel, setPanel] = useState(1);
  return (
    <>
      <h1>Almaty, Kazakhstan</h1>
      <Panel>
        <h2>About</h2>
        <p>
          With a population of about 2 million, Almaty is Kazakhstan's largest
          city. From 1929 to 1997, it was its capital city.
        </p>
        {panel != 0 && (
          <p>
            <button onClick={() => setPanel(0)}>Show</button>
          </p>
        )}
      </Panel>
      <Panel>
        <h2>Etymology</h2>
        <p>
          The name comes from алма, the Kazakh word for "apple" and is often
          translated as "full of apples". In fact, the region surrounding Almaty
          is thought to be the ancestral home of the apple, and the wild Malus
          sieversii is considered a likely candidate for the ancestor of the
          modern domestic apple.
        </p>
        {panel != 1 && (
          <p>
            <button onClick={() => setPanel(1)}>Show</button>
          </p>
        )}
      </Panel>
    </>
  );
}
