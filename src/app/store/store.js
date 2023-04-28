/* eslint-disable spaced-comment */
import {  configureStore} from '@reduxjs/toolkit';
import { cartCounterSlice } from './slices/cartCounter/cartCounterSlice';
import { productsListSlice } from './slices/products/productsSlice';
import { productsApi } from './apis';
export const store = configureStore({
    reducer: {
        cartCounter: cartCounterSlice.reducer,
        productsList: productsListSlice.reducer,

        [productsApi.reducerPath]: productsApi.reducer //propiedad computada
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
});