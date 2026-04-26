import { people } from "./data";
import { getImageUrl } from "./utils";

export default function List() {
  const listPeople = people.map((person) => (
    <li key={person.id}>
      <img className="avatar" src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}</b>: {person.profession} known for{" "}
        {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <section className="scientist-list">
      <h1>Scientists</h1>
      <ul>{listPeople}</ul>
    </section>
  );
}
