export default function EditProfile({ state = "view" }) {
  if (state === "view") {
    return (
      <>
        <p>
          First name: <b>Jane</b>
        </p>
        <p>
          Last name: <b>Jacobs</b>
        </p>
        <p>
          <button>Edit Profile</button>
        </p>
        <p>
          <i>Hello, Jane Jacobs!</i>
        </p>
      </>
    );
  } else {
    return <>Edit</>;
  }
}
