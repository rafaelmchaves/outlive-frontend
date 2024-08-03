import axios from 'axios';

// Define the base URL for your API
const API_BASE_URL = 'http://localhost:8080';

const SAVE_PRODUCT_ENDPOINT = '/products';
const GET_PRODUCT_ENDPOINT = '/sellers/de497f7e-8e6c-4b61-bf25-c547f4b652f1/products';

import { Product } from '../types/Product';

export const saveProduct = async (product: Product) => {
    try {
        const response = await axios.post(`${API_BASE_URL}${SAVE_PRODUCT_ENDPOINT}`, product);
        return response.data; // or just return a success message if needed
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to save a product');
    }
};

export const findProducts = async (sellerId: string, page: number, size: number): Promise<Product[]> => {
    try {
        const response = await axios.get<Product[]>(`${API_BASE_URL}${GET_PRODUCT_ENDPOINT}?page=${page}&size=${size}`);
        return response.data; // or just return a success message if needed
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to get a product');
    }
};