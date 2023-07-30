import axios from 'axios';
import { BASE_URL } from '../constants/globalConstants';

axios.defaults.baseURL = BASE_URL;

const authHeader = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = async credentials => {
  const { data } = await axios.post('/auth/register', credentials);
  authHeader.set(data.token);

  return data;
};

export const loginUser = async credentials => {
  const { data } = await axios.post('/auth/login', credentials);
  authHeader.set(data.token);

  return data;
};

export const logoutUser = async () => {
  const { data } = await axios.post('/auth/logout');
  authHeader.unset();

  return data;
};

export const fetchUserByToken = async persistedToken => {
  authHeader.set(persistedToken);
  const {
    data: { user },
  } = await axios.get('/users');

  return user;
};
