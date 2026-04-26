import Profile from "./Profile";

export default function Gallery() {
  return (
    <section className="gallery">
      <h1>Amazing scientists</h1>
      <Profile
        src="https://react.dev/images/docs/scientists/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
      <Profile
        src="https://react.dev/images/docs/scientists/QIrZWGIs.jpg"
        alt="Alan L. Hart"
      />
      <Profile
        src="https://react.dev/images/docs/scientists/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
      />
    </section>
  );
}
