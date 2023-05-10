import axios from 'axios';
import envJson from '../app/config/ENV.json';

const productClient = envJson.productClient;

export const productsApi = axios.create({
    baseURL: `${productClient.baseUrl}`
});