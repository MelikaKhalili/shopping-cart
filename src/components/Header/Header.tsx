import { useContext } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { ContextCart } from "../../Context/ContextCart";
export default function Header() {
  const { setModalCart } = useContext(ContextCart);
  const openModal = () => {
    setModalCart(true);
  };
  return (
    <div className="flex justify-between px-8 py-4 bg-gray-800">
      <h1 className="font-bold text-white">React Shopping Cart</h1>
      <MdOutlineShoppingBag
        onClick={openModal}
        className="text-white w-6 h-6"
      />
    </div>
  );
}
