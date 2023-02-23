import { ActionTypes } from "../constants/Actions_type";

const initials = {
  product: [
    {
      id: 1,
      title: "Ravindu",
      category: "SE",
    },
  ],
};
export const ProductReducer = (state = initials, { type, payload }) => {
  switch (type) {
    case ActionTypes.SETPRODUCTS:
      return state;
    default:
      return state;
  }
};
