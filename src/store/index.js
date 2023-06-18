
// create store

import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";


const countSlice = createSlice({
    name: "count",
    initialState: { count: 0, showCount: true },
    reducers: {
        increase(state, action) {
            state.count = state.count + 1
        },
        decrease(state, action) {
            state.count = state.count - 1
        },
        reset(state, action) {
            state.count = 0
        },
        toggle(state, action) {
            state.showCount = !state.showCount;
        },
    }
})

export const countAction = countSlice.actions;




export const store = configureStore({
    reducer: { counter : countSlice.reducer}
})