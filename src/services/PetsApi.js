import { api } from './api';
export const getPets = () => api.get('/pets');
export const addPet = data => api.post('/pets', data);
export const deletePet = id => api.delete(`/pets/${id}`);
