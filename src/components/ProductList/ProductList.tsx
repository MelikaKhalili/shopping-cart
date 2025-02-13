import { useEffect, useState } from "react";
import Product from "../Product/Product";
import { getData } from "../services/Products";
interface Iproducts {
  images: string;
  name: string;
  price: string | number;
  id: string;
}
export default function ProductList() {
  const [products, setProducts] = useState<Iproducts[]>([]);
  useEffect(() => {
    getData().then((res) => setProducts(res));
  }, []);
  return (
    <div className="w-full h-full bg-gray-600 p-12 grid grid-cols-4 gap-6">
      {products.map((product) => (
        <Product
          images={product.images}
          name={product.name}
          price={product.price}
          id={product.id}
        />
      ))}
    </div>
  );
}
