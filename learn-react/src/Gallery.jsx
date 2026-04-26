import Profile from "./Profile";

export default function Gallery() {
  return (
    <section className="gallery">
      <h1>Amazing scientists</h1>
      <Profile
        person={{
          id: "MK3eW3As",
          name: "Katherine Johnson",
        }}
        size={100}
      />
      <Profile
        person={{
          id: "QIrZWGIs",
          name: "Alan L. Hart",
        }}
        size={100}
      />
      <Profile
        person={{
          id: "yXOvdOSs",
          name: "Hedy Lamarr",
        }}
        size={100}
      />
    </section>
  );
}
