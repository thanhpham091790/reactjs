import { useState } from "react";

export default function App() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://react.dev/images/docs/scientists/Sd1AgUOm.jpg",
    },
  });

  function handleNameChange(event) {
    setPerson({
      ...person,
      name: event.target.value,
    });
  }

  function handleTitleChange(event) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: event.target.value,
      },
    });
  }

  function handleCityChange(event) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: event.target.value,
      },
    });
  }

  function handleImageChange(event) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: event.target.value,
      },
    });
  }

  return (
    <>
      <p>
        Name:{" "}
        <input type="text" value={person.name} onChange={handleNameChange} />
      </p>
      <p>
        Title:{" "}
        <input
          type="text"
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </p>
      <p>
        City:{" "}
        <input
          type="text"
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </p>
      <p>
        Image:{" "}
        <input
          type="text"
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </p>
      <p>
        <i>{person.artwork.title}</i> by {person.name} (located in{" "}
        {person.artwork.city})
      </p>
      <p>
        <img src={person.artwork.image} alt={person.artwork.title} />
      </p>
    </>
  );
}
