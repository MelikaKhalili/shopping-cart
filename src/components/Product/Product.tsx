import { useContext } from "react";
import { FaEuroSign } from "react-icons/fa6";
import { MdStarRate } from "react-icons/md";
import { Link } from "react-router";
import { ContextCart } from "../../Context/ContextCart";
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
    const x = cartItem.find((item: any) => item.id === id);
    if (x) {
      dispatchCart({
        type: "UPDATE_PRODUCT",
        payload: {
          id,
          count: x.count + 1,
        },
      });
    } else {
      dispatchCart({
        type: "ADD_PRODUCT",
        payload: { images, name, price: price, id: id, count: 1 },
      });
    }
  };

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
      <Link to={`/product/${id}`}>
        <h1>{name}</h1>
      </Link>
      <span className="flex items-center justify-center gap-2">
        <FaEuroSign />
        {price}
      </span>
      <Button
        text={"Add to Cart"}
        className={
          "bg-gray-900 border border-white absolute bottom-0 w-full text-white py-1 px-6"
        }
        onClick={() => addToCart()}
        type={"button"}
      />
    </div>
  );
}
