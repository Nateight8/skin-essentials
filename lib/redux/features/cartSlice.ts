import initialState from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: initialState = {
  cart: [],
};

const carts = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});

export default carts.reducer;
export const { addProduct } = carts.actions;
