import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Good } from '../../types/general';
import { LOAD_STATUSES } from 'types/loadStatuses';
import { api } from 'api/Api';

export interface State {
    items: Good[],
    total: number;
    load_status: LOAD_STATUSES;
}

const SLICE_NAME = "good";

const initialState: State = {
    items: [],
    total: 0,
    load_status: LOAD_STATUSES.UNKNOWN
}

const fetchData = createAsyncThunk(SLICE_NAME, api.getGoods);


const { reducer, actions: goodSlice } = createSlice({
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
            state.items = action.payload.items;
            state.total = action.payload.total
            state.load_status = LOAD_STATUSES.LOADED;
        });
    },

});

export { reducer };
export const actions = { ...goodSlice, fetchData };