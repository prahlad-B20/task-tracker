import axios from 'axios';

const API_URL = 'https://api.example.com'; // Replace with your API URL

export const fetchData = async (endpoint) => {
    try {
        const response = await axios.get(`${API_URL}/${endpoint}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching data: ' + error.message);
    }
};

export const postData = async (endpoint, data) => {
    try {
        const response = await axios.post(`${API_URL}/${endpoint}`, data);
        return response.data;
    } catch (error) {
        throw new Error('Error posting data: ' + error.message);
    }
};

export const putData = async (endpoint, data) => {
    try {
        const response = await axios.put(`${API_URL}/${endpoint}`, data);
        return response.data;
    } catch (error) {
        throw new Error('Error updating data: ' + error.message);
    }
};

export const deleteData = async (endpoint) => {
    try {
        const response = await axios.delete(`${API_URL}/${endpoint}`);
        return response.data;
    } catch (error) {
        throw new Error('Error deleting data: ' + error.message);
    }
};