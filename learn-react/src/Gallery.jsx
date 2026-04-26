import Profile from "./Profile";

export default function Gallery() {
  return (
    <section className="gallery">
      <h1>Amazing scientists</h1>
      <Profile
        person={{
          imageId: "MK3eW3A",
          name: "Katherine Johnson",
        }}
        size={100}
      />
      <Profile
        person={{
          imageId: "QIrZWGI",
          name: "Alan L. Hart",
        }}
        size={100}
      />
      <Profile
        person={{
          imageId: "yXOvdOS",
          name: "Hedy Lamarr",
        }}
        size={100}
      />
    </section>
  );
}
