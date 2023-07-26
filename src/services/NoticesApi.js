import axios from 'axios';
import { BASE_URL } from '../constants/globalConstants';

axios.defaults.baseURL = BASE_URL;

export const getAllNotices = async ({search, page, limit, category}) => {
    try {
        const response = await axios.get(`/notices?page=${page}&limit=${limit}&category=${category}&search=${search}`);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getNoticeById = async (id) => {
    try {
        const response = await axios.get(`/notices${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const addNotice = async () => {
    try {
        const response = await axios.post('/notices');
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const deleteNotice = async (id) => {
    try {
        const response = await axios.delete(`/notices/${id}`);

        return response;
    } catch (error) {
        console.log(error);
    }
};

export const updateNotice = async (id) => {
    try {
        const response = await axios.patch(`/notices/${id}`);

        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getSelfNotice = async () => {
    try {
        const response = await axios.get('/notices/self');

        return response;
    } catch (error) {
        console.log(error);
    }
};
