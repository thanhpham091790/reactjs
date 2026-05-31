function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={
        "https://react.dev/images/docs/scientists/" + person.imageId + ".jpg"
      }
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar person={{ name: "Thanh Pham", imageId: "1bX5QH6" }} size={100} />
  );
}
