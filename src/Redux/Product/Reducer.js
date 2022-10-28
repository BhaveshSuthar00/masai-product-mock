import { Filter, GetProduct, Order, SetCurrentPage } from "./Action";
const initialState = {
  products: [],
  order: "",
  filter: "",
  totalPages: 0,
  loader: true,
  currentPage: 1,
};

export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GetProduct:
      return {
        ...state,
        products: payload.data,
        totalPages: payload.totalPages,
        loader: false,
      };
    case SetCurrentPage:
      return { ...state, currentPage: payload };

    case Order:
      return { ...state, order: payload };
    case Filter:
      return { ...state, filter: payload };
    default:
      return state;
  }
};
// &nbsp
