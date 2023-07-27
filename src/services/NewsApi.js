import axios from 'axios';
import { BASE_URL } from '../constants/globalConstants';

axios.defaults.baseURL = BASE_URL;

export const getNews = async ({ search, page, limit }) => {
  try {
    const response = await axios.get(
      `/news?search=${search}&page=${page}&limit=${limit}`
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};
