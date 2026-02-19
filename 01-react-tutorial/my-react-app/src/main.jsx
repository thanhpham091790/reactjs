
import { createRoot } from 'react-dom/client'

const myElement = (
  <ul>
    <li>Thanh</li>
    <li>Thuy</li>
    <li>Toan</li>
  </ul>
);

createRoot(document.getElementById('root')).render(myElement);
