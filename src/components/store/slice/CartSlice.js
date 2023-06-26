import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addItem(state, action) {
      const find = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find >= 0) {
        state.carts[find].quantity += 1;
      } else {
        const tempvar = { ...action.payload, quantity: 1 };
        state.carts.push(tempvar);
      }
    },
    removeItem(state, action) {
      if (state.carts.length == 1) {
        state.carts.pop(action.payload);
      } else {
        state.carts.splice(action.payload, 1);
      }
    },
    emptyItems(state, action) {
      return {
        carts: [],
        quantity: 0,
      };
    },
    decreaseItem(state, action) {
      const find = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (find > 0) {
        state.carts[find].quantity -= 1;
      } else {
        removeItem();
      }
      // state.carts[find].quantity > 0
      //   ? (state.carts[find].quantity -= 1)
      //   : removeItem();
    },
    increaseItem(state, action) {
      const find = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      state.carts[find].quantity += 1;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, emptyItems, decreaseItem, increaseItem } =
  cartSlice.actions;
