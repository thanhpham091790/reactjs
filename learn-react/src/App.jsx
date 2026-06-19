import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    name: "Thanh",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://react.dev/images/docs/scientists/Sd1AgUOm.jpg",
    },
  });

  function formChangeHandler(e) {
    const { name, value } = e.target;
    if (name in person.artwork) {
      setPerson({
        ...person,
        artwork: {
          ...person.artwork,
          [name]: value,
        },
      });
    } else {
      setPerson({
        ...person,
        [name]: value,
      });
    }
  }

  return (
    <form>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={person.name}
          onChange={formChangeHandler}
        />
      </div>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={person.artwork.title}
          onChange={formChangeHandler}
        />
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={person.artwork.city}
          onChange={formChangeHandler}
        />
      </div>
      <div>
        <label>Image:</label>
        <input
          type="text"
          name="image"
          value={person.artwork.image}
          onChange={formChangeHandler}
        />
      </div>

      <div>
        <i>{person.artwork.title}</i> by {person.name} (located in{" "}
        {person.artwork.city})
      </div>
    </form>
  );
}
