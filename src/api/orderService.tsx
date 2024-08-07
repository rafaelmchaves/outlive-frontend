import { Order } from '@/types/Order';
import axios from 'axios';

// Define the base URL for your API
const API_BASE_URL = 'http://localhost:8080';

const SAVE_ORDER_ENDPOINT = '/orders';

export const saveOrders = async (order: Order) => {
    try {
        const response = await axios.post(`${API_BASE_URL}${SAVE_ORDER_ENDPOINT}`, order);
        return response.data; // or just return a success message if needed
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to save a order');
    }
};