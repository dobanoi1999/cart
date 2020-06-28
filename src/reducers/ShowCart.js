import * as types from "./../constants/types";
import nextId from "react-id-generator";
let data = JSON.parse(localStorage.getItem("cart"));
let initialState = data ? data : [];
export const ShowCart = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_CART:
      return state;
    case types.ADD_PRODUCT:
      let Index = -1;
      state.map((item, index) => {
        if (item.name === action.product.name) {
          return (Index = index);
        }
      });

      if (Index === -1) {
        let product = {
          ...action.product,
          id: nextId(),
          amount: 1,
        };
        state.push(product);
      } else {
        state[Index].amount += 1;
      }

      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    case types.ADD_CART:
      let i = -1;
      state.map((item, index) => {
        if (item.id === action.id) {
          return (i = index);
        }
      });

      if (action.i === 1) {
        state[i].amount += 1;
      } else {
        if (state[i].amount !== 1) {
          state[i].amount -= 1;
        }
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    case types.DELETE_CART:
      let a = -1;
      state.map((item, index) => {
        if (item.id === action.id) {
          return (a = index);
        }
      });
      state.splice(a, 1);
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};

export default ShowCart;
