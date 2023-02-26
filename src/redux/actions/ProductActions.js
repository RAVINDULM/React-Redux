import { ActionTypes } from "../constants/Actions_type";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SETPRODUCTS,
    payload: products,
  };
};

export const selectProduct = (product) => {
  return {
    type: ActionTypes.SELECTEDPRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVEPRODUCT,
  };
};
