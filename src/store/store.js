import { configureStore } from "@reduxjs/toolkit";
// import textReducer from './search/reducer'
// import checkReducer from './checks/reducer'

export const store = configureStore({
    reducer:{
        // text: textReducer,
        // checks: checkReducer, 
    }
})