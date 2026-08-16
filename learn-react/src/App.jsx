import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export default function ShoppingCart() {
  // States
  const [products, setProducts] = useState(initialProducts);

  // Handlers
  function handleAddButtonClick(productId) {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, count: product.count + 1 };
      } else {
        return product;
      }
    });
    setProducts(updatedProducts);
  }

  function handleMinusButtonClick(productId) {
    const updatedProducts = products
      .map((product) => {
        if (product.id === productId) {
          return { ...product, count: product.count - 1 };
        } else {
          return product;
        }
      })
      .filter((product) => product.count > 0);

    setProducts(updatedProducts);
  }

  // Rendering
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} (<b>{product.count}</b>){" "}
            <button onClick={() => handleAddButtonClick(product.id)}>+</button>{" "}
            <button onClick={() => handleMinusButtonClick(product.id)}>
              -
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
