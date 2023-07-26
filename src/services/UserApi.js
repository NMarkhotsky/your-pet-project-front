import axios from 'axios';
import { BASE_URL } from '../constants/globalConstants';

axios.defaults.baseURL = BASE_URL;

export const getCurrentUser = async () => {
    try {
        const response = await axios.get('/users');
        const { user } = await response.data;
        return user;
    } catch (error) {
        console.log(error);
    }
};

export const updateUser = async (formData) => {
    try {
        const response = await axios.patch('/users', formData);

        return response;
    } catch (error) {
        console.log(error);
    }
};

