import axios from 'axios';

const API_URL = 'http://localhost:8000'; //backend url
export const uploadFile = async (data) => {
    try {
        let response = await axios.post(`${API_URL}/upload`, data);
        return response.data;
    } catch (error) {
        console.error('Erroe while calling the api', error.message);
    }
}