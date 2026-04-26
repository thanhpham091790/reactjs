import Card from "./Card";
import Avatar from "./Avatar";

export default function Profile({ person, size }) {
  return (
    <div className="profile">
      <Card>
        <Avatar person={person} size={size} />
      </Card>
    </div>
  );
}
