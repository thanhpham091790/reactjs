import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from "react";
export default function SearchableProductTable({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className="searchable-product-table">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        inStockOnly={inStockOnly}
        setInStockOnly={setInStockOnly}
      />
      <ProductTable
        products={products}
        searchTerm={searchTerm}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}
