import axios from 'axios';

// Define the base URL for your API
const BASE_URL = 'http://your-backend-service/api';

export const fetchData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/data`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const fetchOtherData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/other-data`);
        return response.data;
    } catch (error) {
        console.error('Error fetching other data:', error);
        throw error;
    }
};
