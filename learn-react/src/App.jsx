export default function EditProfile({ state = "edit" }) {
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
    return (
      <>
        <p>
          First name: <input type="text" value="Jane" />
        </p>
        <p>
          Last name: <input type="text" value="Jacobs" />
        </p>
        <p>
          <button>Save Profile</button>
        </p>
        <p>
          <i>Hello, Jane Jacobs!</i>
        </p>
      </>
    );
  }
}
