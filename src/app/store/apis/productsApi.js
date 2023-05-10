import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import envJson from '../../config/ENV.json';

const productClient = envJson.productClient;

export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({
        baseUrl: productClient.baseUrl
    }),
    keepUnusedDataFor: 3600,
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => productClient.productList
        }),
        getProductsById: builder.query({
            query: (productId) => `${productClient.productList}/${productId}`
        })
    })
});

export const { useGetProductsQuery, useGetProductsByIdQuery } = productsApi;
