import { useReducer, useState } from "react";
import { ContextCart } from "../../Context/ContextCart";
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import ProductList from "../ProductList/ProductList";
//کل ابجکت محصولاته:
interface IProducts {
  images: string;
  name: string;
  price: string | number;
  id: string;
}
type IProductsAction =
  | {
      type: "ADD_PRODUCT";
      payload: IProducts;
    }
  | {
      type: "DELETE_PRODUCT";
      payload: string;
    };
const reducer = (state: IProducts[], action: IProductsAction) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.payload];
    case "DELETE_PRODUCT":
      return;
  }
};
export default function HomeCommponent() {
  const [cartItem, dispatchCart] = useReducer(reducer, []);
  const [cartModal, setModalCart] = useState(false);
  // cartItem=[]
  // setCartItem={}
  return (
    <div>
      <ContextCart.Provider
        value={{ cartItem, dispatchCart, cartModal, setModalCart }}
      >
        <Header />
        <ProductList />
        {cartModal && <Cart />}
      </ContextCart.Provider>
    </div>
  );
}
