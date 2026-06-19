import { useImmer } from "use-immer";

export default function Form() {
  const [person, setPerson] = useImmer({
    name: "Thanh",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://react.dev/images/docs/scientists/Sd1AgUOm.jpg",
    },
  });

  function formChangeHandler(e) {
    const { name, value } = e.target;
    setPerson((prevPerson) => {
      const path = name.split(".");
      let current = prevPerson;
      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]];
      }
      const finalKey = path[path.length - 1];
      current[finalKey] = value;
    });
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
          name="artwork.title"
          value={person.artwork.title}
          onChange={formChangeHandler}
        />
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          name="artwork.city"
          value={person.artwork.city}
          onChange={formChangeHandler}
        />
      </div>
      <div>
        <label>Image:</label>
        <input
          type="text"
          name="artwork.image"
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
