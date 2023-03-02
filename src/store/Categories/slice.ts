import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Category } from "types/general";
import { api } from "api/Api";

export interface State {
    categories: Category[];
}

const SLICE_NAME = "categories";
const fetchData = createAsyncThunk(SLICE_NAME, api.getCategories);

const initialState: State = {
    categories: [],
    
}

const { reducer, actions: sliceActions } = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.categories = action.payload;
        })
    }
});

export { reducer };
export const actions = { ...sliceActions, fetchData };