import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/CartSlice";

const store = configureStore({
  reducer: {
    user: cartSlice,
  },
});

export default store;
