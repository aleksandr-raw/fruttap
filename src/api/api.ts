import axios from 'axios';

export const API_BASE_URL = 'http://127.0.0.1:8002/test';
export const WS_BASE_URL = 'ws://127.0.0.1:8002/ws';

export const getUserData = async (userId: number) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user_entry_check/${userId}`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error getting user data:', error.response?.data || error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        throw error;
    }
}

export const sendUserDataOnExit = async (userId: number, energy: number, coins: number) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/user_exit/${userId}?coins=${coins}&energy=${energy}`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error sending user data on exit:', error.response?.data || error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        throw error;
    }
};

