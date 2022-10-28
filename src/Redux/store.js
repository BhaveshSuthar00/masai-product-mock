import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { ProductReducer } from "./Product/Reducer";
const reducer = combineReducers({ Products: ProductReducer });

export const store = legacy_createStore(reducer, applyMiddleware(ReduxThunk));
