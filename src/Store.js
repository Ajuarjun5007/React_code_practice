import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices.js"
export const store = configureStore({
    reducer:{
        counterList:counterReducer,
    },
})