import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PopularCategory } from 'types/general';
import { LOAD_STATUSES } from 'types/loadStatuses';
import { api } from 'api/Api';

export interface State {
    categories: PopularCategory[];
    load_status: LOAD_STATUSES;
};

const initialState: State = {
    categories: [],
    load_status: LOAD_STATUSES.UNKNOWN
};

const SLICE_NAME = "popular_categories";

const fetchData = createAsyncThunk(SLICE_NAME, api.getPopularCategories);

const { reducer, actions: popularCategoriesSlice } = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.load_status = LOAD_STATUSES.LOADING;
        });
        builder.addCase(fetchData.rejected, (state) => {
            state.load_status = LOAD_STATUSES.ERROR;
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.load_status = LOAD_STATUSES.LOADED;
        });
    }
});

export { reducer };
export const actions = { ...popularCategoriesSlice, fetchData };