import { ActionTypes } from "../constants/Actions_type";

export const setProduct = (products) => {
  return {
    type: ActionTypes.SETPRODUCTS,
    payload: productS,
  };
};

export const selectProduct = (products) => {
  return {
    type: ActionTypes.SELECTEDPRODUCT,
    payload: product,
  };
};

// export const removeProduct = (products) => {
//   return {
//     type: ActionTypes.REMOVEPRODUCT,
//     payload: product,
//   };
// };
