import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PopularCategory } from 'types/general';
import { api } from 'api/Api';

export interface State {
    categories: PopularCategory[]
};

const initialState: State = {
    categories: []
};

const SLICE_NAME = "popular_categories";

const fetchData = createAsyncThunk(SLICE_NAME, api.getPopularCategories);

const { reducer, actions: PopularCategoriesSlice } = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {},
    extraReducers: (builders) => {
        builders.addCase(fetchData.fulfilled, (state, action) => {
            state.categories = action.payload;
        })
    },
});

export { reducer };
export const actions = { ...PopularCategoriesSlice, fetchData };