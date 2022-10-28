import { Route, Routes } from "react-router-dom";
import { Product } from "./Product/Main";
import { SingleProduct } from "./Product/SingleProduct";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/products/:id" element={<SingleProduct />} />
    </Routes>
  );
};
