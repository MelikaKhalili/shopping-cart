import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { ContextCart } from "../../Context/ContextCart";
import Counter from "./Counter/Counter";

export default function Cart() {
  const { cartItem, dispatchCart, setModalCart } = useContext(ContextCart);
  console.log(cartItem);
  const handelDeleteProduct = (id: string | number) => {
    dispatchCart({
      type: "DELETE_PRODUCT",
      payload: id,
    });
  };
  return (
    <div className="bg-zinc-800 min-h-screen w-2/5 fixed right-0 top-0 z-10 flex flex-col justify-between">
      <div>
        <div className="bg-stone-500 py-2 px-12">
          <h1 className="flex justify-center items-center text-white font-bold">
            Cart
          </h1>
        </div>
        <div className="flex flex-col gap-6 py-6 px-12">
          {cartItem.map((item: any) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex gap-6">
                <img className="w-24" src={item.images} alt="imgProduct" />
                <div>
                  <h2 className="text-white">{item.name}</h2>
                  <span className="text-white">{item.price * item.count}</span>
                </div>
              </div>
              <div className="flex gap-8 items-center">
                <Counter
                  id={item.id}
                  count={item.count}
                  className={"bg-gray-900 flex flex-col py-1 px-4 text-white"}
                />
                <IoCloseSharp
                  onClick={() => handelDeleteProduct(item.id)}
                  className="text-white"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="flex items-center justify-between bg-gray-700 px-6 py-1  w-full">
        <p className="text-white">
          Total:
          <span>
            {cartItem.reduce((sum: number, current: any) => {
              return sum + current.price * current.count;
            }, 0)}
          </span>
        </p>
        <Button
          onClick={() => setModalCart(false)}
          size={"md"}
          bg={"blue.600"}
          color={"white"}
          rounded={"xl"}
        >
          Checkout
        </Button>
      </footer>
    </div>
  );
}
