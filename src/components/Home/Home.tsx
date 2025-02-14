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
  count: number;
}
type IProductsAction =
  | {
      type: "ADD_PRODUCT";
      payload: IProducts;
    }
  | {
      type: "DELETE_PRODUCT";
      payload: string;
    }
  | {
      type: "UPDATE_PRODUCT";
      payload: {
        id: string | number;
        count: number;
      };
    };
const reducer = (state: IProducts[], action: IProductsAction) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const productFounded = state.find(
        (product) => product.id === action.payload.id
      );
      // if (!productFounded) {
      //   return [...state, action.payload];
      // } else {
      //   return state;
      // }
      return !productFounded ? [...state, action.payload] : state;
    case "DELETE_PRODUCT":
      return state.filter((item) => item.id !== action.payload);
    case "UPDATE_PRODUCT":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          console.log(item.id);
          console.log(action.payload.id);
          item.count = action.payload.count;
        }
        return item;
      });
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
