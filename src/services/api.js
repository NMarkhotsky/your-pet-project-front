import axios from 'axios';
import { BASE_URL } from '../constants/globalConstants';

export const api = axios.create({ baseURL: BASE_URL, timeout: 15000 });
export const authHeader = {
  set(token) { api.defaults.headers.common.Authorization = `Bearer ${token}`; },
  unset() { delete api.defaults.headers.common.Authorization; },
};
export const getErrorMessage = error =>
  error.response?.data?.message || error.message || 'Unable to complete the request';
