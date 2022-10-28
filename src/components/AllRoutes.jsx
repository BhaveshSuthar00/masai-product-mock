import { Route, Routes } from "react-router-dom";
import { Cart } from "./Cart/Cart";
import { Order } from "./Order/Order";
import { Product } from "./Product/Main";
import { SingleProduct } from "./Product/SingleProduct";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
};
