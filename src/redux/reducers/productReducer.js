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
