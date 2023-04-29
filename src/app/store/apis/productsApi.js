import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://itx-frontend-test.onrender.com/api'
    }),
    keepUnusedDataFor: 3600,
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/product'
        }),
        getProductsById: builder.query({
            query: (productId) => `/product/${productId}`
        })
    })
});

export const { useGetProductsQuery, useGetProductsByIdQuery } = productsApi;