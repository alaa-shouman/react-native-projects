import { ConfigureStoreOptions, configureStore } from "@reduxjs/toolkit";
import favorites from "./favorites";

export const store = configureStore({
    reducer:{
        favMeal : favorites
    }
})