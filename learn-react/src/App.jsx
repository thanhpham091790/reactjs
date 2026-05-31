import Avatar from "./Avatar";

function Card({ children }) {
  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        padding: "20px",
        margin: "20px",
        border: "1px solid grey",
        borderRadius: "10px",
        boxSizing: "border-box",
        display: "flex",
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar size={100} person={{ name: "Thanh Pham", imageId: "YfeOqp2" }} />
    </Card>
  );
}
