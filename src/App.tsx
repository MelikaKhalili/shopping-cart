import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/home/home";
import SingleProduct from "./pages/singleProduct/singleProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="product/:id" element={<SingleProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
