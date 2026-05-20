import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../Features/Product/Products"; 
import CartReducer from "../Features/Cart/Cart";
import ThemeReducer from "../Features/Theme/themebg";

export const store = configureStore({
    reducer : {
        products: ProductsReducer,
        cartItem: CartReducer,
        theme: ThemeReducer,
    }
});