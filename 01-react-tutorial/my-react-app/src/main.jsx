
import { createRoot } from 'react-dom/client'

const myTable = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>Thanh</td>
    </tr>
    <tr>
      <td>Pham</td>
    </tr>
  </table>
);

createRoot(document.getElementById('thanh')).render(
  myTable
)
