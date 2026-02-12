
import { createRoot } from 'react-dom/client'

const users = [
  { id: 1, name: 'Thanh', age: 36 },
  { id: 2, name: 'Toan', age: 33 },
  { id: 3, name: 'Thuy', age: 35 },
];

function UserList() {
  return (
    <ul>
      {
        users.map((user) => {
          return <li key={user.id}>{`${user.name} is ${user.age} year old.`}</li>;
        })
      }
    </ul>
  );
}

createRoot(document.getElementById('thanh')).render(<UserList />);
