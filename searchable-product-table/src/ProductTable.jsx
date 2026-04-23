import CategoryRow from "./CategoryRow";
import ProductRow from "./ProductRow";
export default function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <CategoryRow key={product.category} category={product.category} />,
      );
      lastCategory = product.category;
    }
    rows.push(<ProductRow key={product.name} product={product} />);
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
