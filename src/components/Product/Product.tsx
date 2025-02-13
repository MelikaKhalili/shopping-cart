import { FaEuroSign } from "react-icons/fa6";
import { MdStarRate } from "react-icons/md";
import Button from "../base/Button/Button";
export interface Iprops {
  img: string;
  titel: string;
  price: string | number;
  id: string;
}
export default function Product({ img, titel, price, id }: Iprops) {
  return (
    <div className="bg-gray-500  border-2 border-white p-4 flex flex-col items-center shadow-md min-h-[400px] relative gap-4">
      <img src={img} alt="Image-Product" />
      <div className="flex">
        <MdStarRate />
        <MdStarRate />
        <MdStarRate />
        <MdStarRate />
        <MdStarRate />
      </div>
      <h1>{titel}</h1>
      <span className="flex items-center justify-center gap-2">
        <FaEuroSign />
        {price}
      </span>
      <Button
        text={"Add to Cart"}
        className={
          "bg-gray-900 border border-white absolute bottom-0 w-full text-white py-1 px-6"
        }
        onClick={() => {}}
        type={"button"}
      />
    </div>
  );
}
