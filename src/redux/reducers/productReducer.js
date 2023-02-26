import { ActionTypes } from "../constants/Actions_type";

const initialstate = {
  products: [],
};
export const ProductReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ActionTypes.SETPRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTEDPRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVEPRODUCT:
      return {};
    default:
      return state;
  }
};
