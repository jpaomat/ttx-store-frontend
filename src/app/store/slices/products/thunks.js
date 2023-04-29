import { setProductList, startLoadingProductList } from './productsSlice';
import { productsApi } from '../../../../api/products';

export const getProductList = () => {
    return async (dispatch, getState) => {
        dispatch(startLoadingProductList());
        const {data: products} = await productsApi.get('product');
        dispatch(setProductList(products));
    };
};
