import { MdOutlineShoppingBag } from "react-icons/md";
export default function Header() {
  return (
    <div className="flex justify-between px-8 py-4 bg-gray-800">
      <h1 className="font-bold text-white">React Shopping Cart</h1>
      <MdOutlineShoppingBag className="text-white w-6 h-6" />
    </div>
  );
}
