const ADD_TO_CART = "ADDTOCART";
const REMOVE_FROM_CART = "REMOVEFROMCART";

const addItem = (data) => ({ type: ADD_TO_CART, payload: data });

const removeItem = (data) => ({ type: REMOVE_FROM_CART, payload: data });

const ADD_TO_ORDER = "ADDORDER";

const addOrder = (data) => ({ type: ADD_TO_ORDER, payload: data });

export {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_ORDER,
  addItem,
  removeItem,
  addOrder,
};
