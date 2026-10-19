import { api } from './api';
export const getNews = (params = {}, options = {}) => api.get('/news', { ...options, params });
