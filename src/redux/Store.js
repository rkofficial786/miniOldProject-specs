import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import LoginSlice from "./slices/LoginSlice"


export const Store=configureStore({
    reducer:{
        cart:CartSlice , 
        login:LoginSlice
    }
});