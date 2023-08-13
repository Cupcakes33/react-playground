import { useEffect, useId, useState } from "react";
type Product = {
  id: number;
  name: string;
  price: number;
};

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const id = useId();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `data/${checked ? "sale" : "products"}.json`
        );
        const data: Product[] = await response.json();
        if (data) {
          setProducts(data);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [checked]);

  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
      />
      <label htmlFor="checkbox">for sale</label>
      <button onClick={() => setIsOpen((prev) => !prev)}>Open</button>
      {isOpen ? (
        <ul>
          {products.map((product) => (
            <li key={`${id}${product.id}`}>
              <article>
                <h2>{id}</h2>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </article>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
