import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { cartReducer } from "./Cart/Reducer";
import { ProductReducer } from "./Product/Reducer";
const reducer = combineReducers({
  Products: ProductReducer,
  Cart: cartReducer,
});

export const store = legacy_createStore(reducer, applyMiddleware(ReduxThunk));
