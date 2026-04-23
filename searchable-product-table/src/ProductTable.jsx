import CategoryRow from "./CategoryRow";
import ProductRow from "./ProductRow";
export default function ProductTable({ products, searchTerm, inStockOnly }) {
  const rows = [];
  let lastCategory = null;
  let filteredProducts = products.filter((product) => {
    const nameMatches = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const stockMatches = !inStockOnly || product.stocked;
    return nameMatches && stockMatches;
  });

  filteredProducts.forEach((filteredProduct) => {
    if (filteredProduct.category !== lastCategory) {
      rows.push(
        <CategoryRow
          key={filteredProduct.category}
          category={filteredProduct.category}
        />,
      );
      lastCategory = filteredProduct.category;
    }
    rows.push(
      <ProductRow key={filteredProduct.name} product={filteredProduct} />,
    );
  });

  return (
    <div className="product-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
