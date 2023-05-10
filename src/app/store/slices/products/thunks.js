import { setProductList, startLoadingProductList } from './productsSlice';
import { productsApi } from '../../../../api/products';
import envJson from '../../../config/ENV.json';

const productClient = envJson.productClient;

export const getProductList = () => {
    return async (dispatch, getState) => {
        dispatch(startLoadingProductList());
        const {data: productList} = await productsApi.get(productClient.productList);
        dispatch(setProductList(productList));
    };
};
