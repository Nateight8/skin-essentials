import { configureStore } from "@reduxjs/toolkit";
import cartsReducers from "./features/cartSlice";
// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    carts: cartsReducers,
  },
});

// export const useAppSelector: TypedUseSelectorHook<
//   ReturnType<typeof store.getState>
// > = useSelector;
// export const useAppDispatch: () => typeof store.dispatch = useDispatch;
