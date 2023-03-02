import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer as categoriesReducer } from "./Categories/slice";
import { reducer as goodsReducer } from "./Good/slice";
import { reducer as popularReducer } from "./PopularCategories/slice";

const rootReducer = combineReducers({
    categories: categoriesReducer,
    goods: goodsReducer,
    popularCategories: popularReducer,
})

export const store = configureStore({ reducer: rootReducer });

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;