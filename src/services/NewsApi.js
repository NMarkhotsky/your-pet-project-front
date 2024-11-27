import axios from 'axios';
import { BASE_URL } from '../constants/globalConstants';

axios.defaults.baseURL = BASE_URL;

export const getNews = async params => {
  try {
    let reqURL = '';
    for (let key in params) {
      reqURL += `&${key}=${params[key]}`;
    }

    const response = await axios.get(`/news?${reqURL}`);

    return response;
  } catch (error) {
    console.log(error);
  }
};
