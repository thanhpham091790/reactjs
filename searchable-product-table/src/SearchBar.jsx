export default function SearchBar({
  searchTerm,
  setSearchTerm,
  inStockOnly,
  setInStockOnly,
}) {
  return (
    <div className="search-bar">
      <form>
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="in-stock"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
          />
          <label htmlFor="in-stock">Only show products in stock</label>
        </div>
      </form>
    </div>
  );
}
