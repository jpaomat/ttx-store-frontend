import { createSlice } from '@reduxjs/toolkit';

export const cartCounterSlice = createSlice({
    name: 'cartCounter',
    initialState: {
        counter: 0,
        productsInCart: []
    },
    reducers: {
        incrementCartCounter: (state, action) => {
            // state.counter = action.payload.count;
            state.counter += 1;
            state.productsInCart = [...state.productsInCart, action.payload.product];
        }
    }
});

export const { incrementCartCounter } = cartCounterSlice.actions;