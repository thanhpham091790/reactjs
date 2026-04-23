import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
export default function SearchableProductTable({ products }) {
  return (
    <div className="searchable-product-table">
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}
