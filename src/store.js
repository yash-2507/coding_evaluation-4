import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./cart/cartSlice";

export const store = configureStore({
    reducer: {
        product: productReducer,
    },
});
