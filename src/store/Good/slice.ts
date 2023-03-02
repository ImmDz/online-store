import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api/Api';
import type { Good } from '../../types/general';

export interface State {
    items: Good[];
    // total: number;
}

const SLICE_NAME = "good";
const initialState: State = {
    items: [],
    // total: 0,
}

const fetchData = createAsyncThunk(SLICE_NAME, api.getGoods);


const { reducer, actions: goodSlice } = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {},
    extraReducers: (builders) => {
        builders.addCase(fetchData.fulfilled, (state, action) => {
            state.items = action.payload;
        });
    },

});

export { reducer };
export const actions = { ...goodSlice, fetchData };