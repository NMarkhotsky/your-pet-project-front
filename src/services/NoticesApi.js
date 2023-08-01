import axios from 'axios';
import { BASE_URL } from '../constants/globalConstants';
import { errorMessage, successMessage } from '../utils/messages';

axios.defaults.baseURL = BASE_URL;

//   const initialParams = {
//     search: null,
//     page: 1,
//     limit: 6,
//     category: CATEGORIES.IN_GOOD_HANDS,
//     sex: SEX.FEMALE,
//     young: true,
//     middle: false,
//     older: false
// }

export const getAllNotices = async params => {
  try {
    let reqURL = '';
    for (let key in params) {
      reqURL += `&${key}=${params[key]}`;
    }
    const { data } = await axios.get(`/notices?${reqURL}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getNoticeById = async id => {
  try {
    const response = await axios.get(`/notices/${id}`);
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

export const deleteNotice = async id => {
  try {
    const response = await axios.delete(`/notices/${id}`);
    successMessage('The card was successfully removed');
    return response;
  } catch (error) {
    console.log(error);
    errorMessage('It is not your pet and you cannot remove it');
  }
};

export const updateNotice = async id => {
  try {
    const response = await axios.patch(`/notices/favorites/${id}`);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getSelfNotices = async params => {
  try {
    let reqURL = '';
    for (let key in params) {
      reqURL += `&${key}=${params[key]}`;
    }
    const { data } = await axios.get(`/notices/self?${reqURL}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getFavoriteNotices = async params => {
  try {
    let reqURL = '';
    for (let key in params) {
      reqURL += `&${key}=${params[key]}`;
    }
    const { data } = await axios.get(`/notices/favorites?${reqURL}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
