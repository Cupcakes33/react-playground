import { useRef, useState } from "react";
import useFetch from "./useFetch";
type Product = {
  id: number;
  name: string;
  price: number;
};

export default function PriceChanger() {
  const [products, setProducts] = useState<Product[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  useFetch<Product>({ setAction: setProducts, url: "data/products.json" });

  const handleChangePrice = () => {
    const name = prompt("상품?");
    const price = Number(prompt("바꾸고 싶은 가격?"));

    if (!name || Number.isNaN(price)) {
      return alert("상품명과 가격을 다시 확인해주세요.");
    }

    setProducts((prev) => {
      return prev.map((product) => {
        if (product.name === name) {
          return { ...product, price };
        }
        return product;
      });
    });
  };

  const handleProductDelete = (id: Product["id"]) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const handleAddProduct = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      price: { value: string };
    };

    const name = target.name.value;
    const price = Number(target.price.value);

    if (!name || Number.isNaN(price)) {
      return alert("추가할 상품의 이름과 가격을 다시 확인해주세요");
    }
    setProducts((prev) => [...prev, { id: Math.random(), name, price }]);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id} className="mb-5">
              <h3>product : {product.name}</h3>
              <p>price : {product.price}</p>
              <button
                className="p-1 rounded-lg bg-slate-400"
                onClick={() => handleProductDelete(product.id)}
              >
                ❌ Delete
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        <button
          className="p-1 rounded-lg bg-slate-400"
          onClick={handleChangePrice}
        >
          가격 바꾸기
        </button>
      </div>
      <form
        className="flex mt-3 border w-min"
        onSubmit={handleAddProduct}
        ref={formRef}
      >
        <input
          type="text"
          className="p-1 border"
          placeholder="product"
          name="name"
        />
        <input
          type="text"
          className="p-1 border"
          placeholder="price"
          name="price"
        />
        <button type="submit" className="p-1 truncate bg-slate-400">
          Add Item
        </button>
      </form>
    </>
  );
}
