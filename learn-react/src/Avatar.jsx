import { getImageUrl } from "./utils";
export default function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      style={{
        width: size,
        height: size,
      }}
    />
  );
}
