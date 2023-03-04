import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Category } from "types/general";
import { LOAD_STATUSES } from "types/loadStatuses";
import { api } from "api/Api";

export interface State {
    categories: Category[];
    load_status: LOAD_STATUSES;
}

const SLICE_NAME = "categories";
const fetchData = createAsyncThunk(SLICE_NAME, api.getCategories);

const initialState: State = {
    categories: [],
    load_status: LOAD_STATUSES.UNKNOWN
}

const { reducer, actions: sliceActions } = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.load_status = LOAD_STATUSES.LOADING;
            console.log(state.load_status)
        });
        builder.addCase(fetchData.rejected, (state) => {
            state.load_status = LOAD_STATUSES.ERROR;
            console.log(state.load_status)
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.load_status = LOAD_STATUSES.LOADED;
            console.log(state.load_status)
        });
    }
});

export { reducer };
export const actions = { ...sliceActions, fetchData };