
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

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        badgeNumber : 0,
        cartItems : []
    },
    reducers : {
        addToCart(state, action){
            // console.log(action.payload)
         const itemExist =   state.cartItems.find((item) => item.id === action.payload.id)

         if(itemExist){
            alert("item allready aaded into cart!")
         } else{
            state.cartItems.push(action.payload);
            state.badgeNumber = state.cartItems.length;
            alert("item added to cart!")
         }

        }
    }
})

export const countAction = countSlice.actions;
export const cartAction = cartSlice.actions;




export const store = configureStore({
    reducer: { counter : countSlice.reducer, cart : cartSlice.reducer }
})