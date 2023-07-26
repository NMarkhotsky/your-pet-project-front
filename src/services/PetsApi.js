import axios from 'axios';
import { BASE_URL } from '../constants/globalConstants';

axios.defaults.baseURL = BASE_URL;

export const getPets = async () => {
    try {
        const response = await axios.get('/pets');
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const addPet = async () => {
    try {
        const response = await axios.post('/pets');
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const deletePet = async (id) => {
    try {
        const response = await axios.delete(`/pets/${id}`);

        return response;
    } catch (error) {
        console.log(error);
    }
};
