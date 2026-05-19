import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../Features/Product/Products"; 

export const store = configureStore({
    reducer : {
        products: ProductsReducer
    }
});