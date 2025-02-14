import { useContext, useEffect, useState } from "react";
import { FaEuroSign } from "react-icons/fa6";
import { MdStarRate } from "react-icons/md";
import { ContextCart } from "../../Context/ContextCart";
import Counter from "../../components/Cart/Counter/Counter";

import Button from "../base/Button/Button";
export interface Iprops {
  images: string;
  name: string;
  price: string | number;
  id: string;
}
export default function Product({ images, name, price, id }: Iprops) {
  const { cartItem, dispatchCart } = useContext(ContextCart);
  const addToCart = () => {
    dispatchCart({
      type: "ADD_PRODUCT",
      payload: { images, name, price: price, id: id, count: 1 },
    });
  };
  const [CheckProduct, setCheckProduct] = useState<any>(undefined);
  console.log(CheckProduct);

  useEffect(() => {
    const x = cartItem.find((item: any) => item.id === id);
    if (x) {
      setCheckProduct(x);
    }
  }, [CheckProduct]);
  return (
    <div className="bg-gray-500  border-2 border-white p-4 flex flex-col items-center shadow-md min-h-[400px] relative gap-4">
      <img src={images} alt="Image-Product" />
      <div className="flex text-yellow-300">
        <MdStarRate />
        <MdStarRate />
        <MdStarRate />
        <MdStarRate />
        <MdStarRate />
      </div>
      <h1>{name}</h1>
      <span className="flex items-center justify-center gap-2">
        <FaEuroSign />
        {price}
      </span>
      {!CheckProduct ? (
        <Button
          text={"Add to Cart"}
          className={
            "bg-gray-900 border border-white absolute bottom-0 w-full text-white py-1 px-6"
          }
          onClick={() => addToCart()}
          type={"button"}
        />
      ) : (
        <Counter
          count={CheckProduct.count ?? 0}
          id={id}
          className={
            "bg-gray-900 border border-white absolute bottom-0 w-full text-white py-1 flex items-center justify-evenly"
          }
        />
      )}
    </div>
  );
}
