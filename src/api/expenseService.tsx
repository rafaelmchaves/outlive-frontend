import axios from 'axios';
import exp from 'constants';

// Define the base URL for your API
const API_BASE_URL = 'http://localhost:8080';

// Define the endpoint for expenses
const EXPENSES_ENDPOINT = '/expenses';

// Define the type for an expense
interface Expense {
    name: string;
    type: string;
    value: string;
}

// Function to save an expense
export const saveExpense = async (expense: Expense) => {
    try {
        const response = await axios.post(`${API_BASE_URL}${EXPENSES_ENDPOINT}`, expense);
        return response.data; // or just return a success message if needed
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Failed to save expense');
    }
};
