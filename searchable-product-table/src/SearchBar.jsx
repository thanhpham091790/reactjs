export default function SearchBar() {
  return (
    <div className="search-bar">
      <form>
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="checkbox">
          <input type="checkbox" id="in-stock" />
          <label htmlFor="in-stock">Only show products in stock</label>
        </div>
      </form>
    </div>
  );
}
