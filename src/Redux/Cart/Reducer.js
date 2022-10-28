import { ADD_TO_CART, ADD_TO_ORDER, REMOVE_FROM_CART } from "./Action";

const initialState = {
  cartItems: [],
  orders: [],
};
export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id != payload),
      };
    case ADD_TO_ORDER:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id != payload.id),
        orders: [...state.orders, payload],
      };
    default:
      return state;
  }
};
