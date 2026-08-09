import { useState } from "react";

export default function Form() {
  // States
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://react.dev/images/docs/scientists/Sd1AgUOm.jpg",
    },
  });

  // Handlers
  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  }

  return (
    <form>
      <label>Name: </label>{" "}
      <input
        type="text"
        name="name"
        value={person.name}
        onChange={handleNameChange}
      />
      <br />
      <label>Title: </label>{" "}
      <input
        type="text"
        name="title"
        value={person.artwork.title}
        onChange={handleTitleChange}
      />
      <br />
      <label>City: </label>{" "}
      <input
        type="text"
        name="city"
        value={person.artwork.city}
        onChange={handleCityChange}
      />
      <br />
      <label>Image: </label>{" "}
      <input
        type="text"
        name="image"
        value={person.artwork.image}
        onChange={handleImageChange}
      />
      <br />
      <p>
        {person.artwork.title} by {person.name} (located in{" "}
        {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </form>
  );
}
