import { combineReducers } from "redux";
import fetchProductsReducer from "./ProductReducers/fetchProductsReducer";

const rootReducer = combineReducers({
  products: fetchProductsReducer
});

export default rootReducer;
