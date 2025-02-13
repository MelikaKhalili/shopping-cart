import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import ProductList from "../ProductList/ProductList";

export default function HomeCommponent() {
  return (
    <div>
      <Header />
      <ProductList />
      <Cart />
    </div>
  );
}
