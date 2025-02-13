import { useContext } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { ContextCart } from "../../Context/ContextCart";

export default function Cart() {
  const { cartItem } = useContext(ContextCart);
  console.log(cartItem);
  return (
    <div className="bg-zinc-800 min-h-screen w-2/5 fixed right-0 top-0 z-10  ">
      <div className="bg-stone-500 py-2 px-12">
        <h1 className="flex justify-center items-center text-white font-bold">
          Cart
        </h1>
      </div>
      <div className="flex fle-col gap-6 py-6 px-12">
        {cartItem.map((item: any) => (
          <div className="flex items-center justify-evenly">
            <img src={item.images} alt="" />
            <div>
              <h2>{item.name}</h2>
              <span>{item.price}</span>
            </div>
            <IoCloseSharp className="text-white" />
          </div>
        ))}
      </div>
    </div>
  );
}
