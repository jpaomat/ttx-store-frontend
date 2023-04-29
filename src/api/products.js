import axios from 'axios';

export const productsApi = axios.create({
    baseURL: 'https://itx-frontend-test.onrender.com/api'
});