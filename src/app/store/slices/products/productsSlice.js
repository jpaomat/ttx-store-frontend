import { createSlice } from '@reduxjs/toolkit';

export const productsListSlice = createSlice({
    name: 'productsList',
    initialState: {
        page: 0,
        products: [],
        isLoadingData: false,
        filteredProducts: [],
    },
    reducers: {
        setfilterProductsList: (state, action) => {
            state.isLoadingData = false;
            state.filteredProducts = action.payload;
        },
        startLoadingProductList: (state) => {
            state.isLoadingData = true;
        },
        setProductList: (state, action) => {
            state.isFiltered = false;
            state.products = action.payload;
        }
    }
});
export const { setfilterProductsList,  setProductList, startLoadingProductList } = productsListSlice.actions;