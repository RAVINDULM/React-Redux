import { ActionTypes } from "../constants/Actions_type";

const initialstate = {
  product: [
    {
      id: 1,
      title: "Ravindu",
      category: "SE",
    },
  ],
};
export const ProductReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ActionTypes.SETPRODUCTS:
      return state;
    default:
      return state;
  }
};
