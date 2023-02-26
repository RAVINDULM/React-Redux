import { combineReducers } from "redux";
import { ProductReducer, selectedProductsReducer } from "./productReducer";
export const Reducer = combineReducers({
  allProducts: ProductReducer,
  product: selectedProductsReducer,
});
