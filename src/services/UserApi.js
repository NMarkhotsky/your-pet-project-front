import { api } from './api';
export const getCurrentUser = async () => (await api.get('/users')).data.user;
export const updateUser = formData => api.patch('/users', formData);
