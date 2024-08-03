import axios from 'axios';

// Define the base URL for your API
const API_BASE_URL = 'http://localhost:8080';

const PRODUCT_ENDPOINT = '/products';

interface Product {
    name: string;
    type: string;
    description: string;
    price: string;
    fraction: string;
    sellerId: string;
}

// Function to save an expense
export const saveProduct = async (product: Product) => {
    try {
        const response = await axios.post(`${API_BASE_URL}${PRODUCT_ENDPOINT}`, product);
        return response.data; // or just return a success message if needed
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to save expense');
    }
};