export default function ProductRow({ product }) {
  const className = product.stocked ? "" : "out-of-stock";

  return (
    <tr className="product-row">
      <td className={className}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
