import { configureStore } from "@reduxjs/toolkit";
import modelReducer from "../store/model/reducer.js";
import categoriesReducer from "../store/categories/reducer.js"
import colorReducer from "../store/color/reducer.js"

export const store = configureStore({
    reducer:{ 
        model : modelReducer,
        category: categoriesReducer,
        colors: colorReducer,
    }
})